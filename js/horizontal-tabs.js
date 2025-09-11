/**
 * Horizontal Tabs Component
 * 基於 user-info.html 的 areas 數據和 MCP 設計規範
 */

class HorizontalTabs {
  constructor(container) {
    this.container = container;
    this.areas = [
      'Web3', 'Fine Arts', 'Tech Dev', 'Design',
      'Business', 'Community Growth', 'Gaming', 'Physical Activity',
      'Education', 'Social Influence', 'Research', 'Media Content',
      'Travel', 'Health Care'
    ];
    
    this.areaIcons = {
      'Business': 'business_center',
      'Community Growth': 'people',
      'Design': 'design_services',
      'Education': 'school',
      'Fine Arts': 'brush',
      'Gaming': 'sports_esports',
      'Health Care': 'local_hospital',
      'Media Content': 'movie',
      'Physical Activity': 'fitness_center',
      'Research': 'science',
      'Social Influence': 'campaign',
      'Tech Dev': 'code',
      'Travel': 'explore',
      'Web3': 'language'
    };
    
    this.selectedAreas = this.getSelectedAreasFromStorage();
    this.activeTab = this.selectedAreas[0] || null;
    
    this.init();
  }
  
  getSelectedAreasFromStorage() {
    try {
      const userData = JSON.parse(localStorage.getItem('twin3_user_data') || '{}');
      const selectedAreas = JSON.parse(localStorage.getItem('twin3_selected_areas') || '[]');
      
      // 如果有選擇的 areas，使用它們；否則使用預設
      if (selectedAreas.length > 0) {
        return selectedAreas;
      }
      
      // 從 userData.area 推斷（向後兼容）
      if (userData.area) {
        const areaMap = {
          'business': 'Business',
          'community': 'Community Growth',
          'design': 'Design',
          'education': 'Education',
          'arts': 'Fine Arts',
          'gaming': 'Gaming',
          'healthcare': 'Health Care',
          'media': 'Media Content',
          'fitness': 'Physical Activity',
          'research': 'Research',
          'influence': 'Social Influence',
          'developer': 'Tech Dev',
          'explorer': 'Travel',
          'web3': 'Web3'
        };
        return [areaMap[userData.area] || 'Tech Dev'];
      }
      
      return ['Tech Dev']; // 預設值
    } catch (error) {
      console.error('Error loading selected areas:', error);
      return ['Tech Dev'];
    }
  }
  
  init() {
    this.render();
    this.bindEvents();
    this.checkOverflow();
    
    // 監聽視窗大小變化
    window.addEventListener('resize', () => {
      this.checkOverflow();
    });
  }
  
  render() {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      this.renderMobile();
    } else {
      this.renderDesktop();
    }
  }
  
  renderDesktop() {
    this.container.innerHTML = `
      <div class="horizontal-tabs-desktop">
        <div class="horizontal-tabs-container">
          <div class="tab-bar" id="tabs-nav">
            <div class="tabs-scroll-container">
              ${this.selectedAreas.map(area => `
                <button class="tab-button ${area === this.activeTab ? 'active' : ''}"
                        data-area="${area}">
                  ${area}
                </button>
              `).join('')}
            </div>
          </div>
          <!-- Carousel Arrows -->
          <button class="carousel-arrow chevron-left" id="scroll-left" aria-label="向左滾動">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="carousel-arrow chevron-right" id="scroll-right" aria-label="向右滾動">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <button class="add-button" id="add-tab-btn" aria-label="新增標籤">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `;
  }
  
  renderMobile() {
    this.container.innerHTML = `
      <div class="horizontal-tabs-mobile">
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-trigger" id="mobile-dropdown-trigger">
            <span>${this.activeTab || 'Select Area'}</span>
            <svg class="mobile-dropdown-chevron" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="mobile-dropdown-menu" id="mobile-dropdown-menu">
            ${this.selectedAreas.map(area => `
              <div class="mobile-dropdown-option ${area === this.activeTab ? 'selected' : ''}" 
                   data-area="${area}">
                ${area}
              </div>
            `).join('')}
            <div class="mobile-dropdown-option add-new" id="mobile-add-option">
              + Add New Area
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  bindEvents() {
    // Tab 點擊事件
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-button')) {
        this.setActiveTab(e.target.dataset.area);
      }
      
      if (e.target.closest('.add-button') || e.target.closest('#mobile-add-option')) {
        this.showAddDialog();
      }
      
      if (e.target.closest('#scroll-left')) {
        this.scrollTabs('left');
      }
      
      if (e.target.closest('#scroll-right')) {
        this.scrollTabs('right');
      }
      
      if (e.target.closest('.mobile-dropdown-trigger')) {
        this.toggleMobileDropdown();
      }
      
      if (e.target.classList.contains('mobile-dropdown-option') && !e.target.classList.contains('add-new')) {
        this.setActiveTab(e.target.dataset.area);
        this.closeMobileDropdown();
      }
    });
    
    // 點擊外部關閉下拉選單
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mobile-dropdown')) {
        this.closeMobileDropdown();
      }
    });
  }
  
  setActiveTab(area) {
    this.activeTab = area;
    
    // 更新 UI
    this.container.querySelectorAll('.tab-button, .mobile-dropdown-option').forEach(tab => {
      tab.classList.remove('active', 'selected');
    });

    this.container.querySelectorAll(`[data-area="${area}"]`).forEach(tab => {
      tab.classList.add(tab.classList.contains('tab-button') ? 'active' : 'selected');
    });
    
    // 更新 mobile trigger 文字
    const trigger = this.container.querySelector('.mobile-dropdown-trigger span');
    if (trigger) {
      trigger.textContent = area;
    }
    
    // 觸發自定義事件
    this.container.dispatchEvent(new CustomEvent('tabChange', {
      detail: { activeTab: area }
    }));
  }
  
  checkOverflow() {
    const nav = this.container.querySelector('.tabs-scroll-container');
    const container = this.container.querySelector('.horizontal-tabs-container');
    
    if (!nav || !container) return;
    
    const hasOverflow = nav.scrollWidth > container.clientWidth;
    
    if (hasOverflow) {
      this.container.classList.add('has-overflow');
      nav.classList.add('overflow');
    } else {
      this.container.classList.remove('has-overflow');
      nav.classList.remove('overflow');
    }
  }
  
  scrollTabs(direction) {
    const nav = this.container.querySelector('.tabs-scroll-container');
    if (!nav) return;
    
    const scrollAmount = 200;
    const currentScroll = nav.scrollLeft;
    
    if (direction === 'left') {
      nav.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    } else {
      nav.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  
  toggleMobileDropdown() {
    const menu = this.container.querySelector('.mobile-dropdown-menu');
    const trigger = this.container.querySelector('.mobile-dropdown-trigger');
    
    if (menu && trigger) {
      const isOpen = menu.classList.contains('open');
      
      if (isOpen) {
        this.closeMobileDropdown();
      } else {
        menu.classList.add('open');
        trigger.classList.add('open');
      }
    }
  }
  
  closeMobileDropdown() {
    const menu = this.container.querySelector('.mobile-dropdown-menu');
    const trigger = this.container.querySelector('.mobile-dropdown-trigger');
    
    if (menu) menu.classList.remove('open');
    if (trigger) trigger.classList.remove('open');
  }
  
  showAddDialog() {
    // 顯示可選擇的 areas（排除已選擇的）
    const availableAreas = this.areas.filter(area => !this.selectedAreas.includes(area));
    
    if (availableAreas.length === 0) {
      alert('All areas have been selected!');
      return;
    }
    
    // 簡單的選擇對話框（之後會被彈窗替換）
    const selectedArea = prompt(`Choose an area to add:\n${availableAreas.join('\n')}`);
    
    if (selectedArea && availableAreas.includes(selectedArea)) {
      this.addArea(selectedArea);
    }
  }
  
  addArea(area) {
    if (this.selectedAreas.length >= 3) {
      alert('Maximum 3 areas allowed!');
      return;
    }
    
    if (!this.selectedAreas.includes(area)) {
      this.selectedAreas.push(area);
      this.saveSelectedAreas();
      this.render();
      this.bindEvents();
      this.checkOverflow();
    }
  }
  
  saveSelectedAreas() {
    localStorage.setItem('twin3_selected_areas', JSON.stringify(this.selectedAreas));
  }
}

// 自動初始化
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.horizontal-tabs');
  if (container) {
    new HorizontalTabs(container);
  }
});
