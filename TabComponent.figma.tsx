import { figma } from '@figma/code-connect'

// Tab Component - Default State (135-3584)
figma.connect(
  'https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=135-3584',
  {
    props: {
      current: figma.boolean('Current'),
      size: figma.enum('Size', {
        sm: 'sm',
        md: 'md'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disable: 'disabled'
      }),
      children: figma.string('Text')
    },
    example: ({ current, size, state, children }) => (
      <div 
        className={`figma-tab-${current ? 'active' : state === 'hover' ? 'hover' : state === 'disabled' ? 'disabled' : 'default'} ${size === 'md' ? 'figma-tab-md' : ''}`}
        data-index="0"
      >
        {children}
      </div>
    )
  }
)

// Horizontal tabs Component Set (151-3559)
figma.connect(
  'https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=151-3559',
  {
    props: {
      status: figma.enum('status', {
        Default: 'default',
        hover: 'hover'
      }),
      fullWidth: figma.boolean('Full width'),
      breakpoint: figma.enum('Breakpoint', {
        Desktop: 'desktop',
        mobile: 'mobile'
      })
    },
    example: ({ status, fullWidth, breakpoint }) => (
      <div className="figma-horizontal-tabs-container" style={{ position: 'relative' }}>
        {/* Left Chevron Button */}
        <div className={`figma-chevron-left ${status === 'hover' ? 'visible' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Tab Bar */}
        <div className={`figma-tab-bar ${fullWidth ? 'full-width' : ''}`}>
          <div className="figma-tab-active" data-index="0">General</div>
          <div className="figma-tab-default" data-index="1">Technical</div>
          <div className="figma-tab-default" data-index="2">Creative</div>
        </div>
        
        {/* Right Chevron Button */}
        <div className={`figma-chevron-right ${status === 'hover' ? 'visible' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Add Button */}
        <div className="figma-add-button">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    )
  }
)

// Carousel arrow Component Set (145-3148)
figma.connect(
  'https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=145-3148',
  {
    props: {
      chevron: figma.enum('Chevron', {
        left: 'left',
        right: 'right'
      })
    },
    example: ({ chevron }) => {
      const pathData = chevron === 'left' ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"
      return (
        <div className={`figma-chevron-${chevron}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={pathData}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )
    }
  }
)
