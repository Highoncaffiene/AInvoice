// src/assets/dummyStyles.js
export const aiInvoiceModalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-black opacity-30",
  modal: "relative max-w-3xl w-full bg-white rounded-lg shadow-lg p-6 z-10",
  title: "inline-flex items-center gap-2 py-2 pb-4 text-gray-700  transition-all duration-200 font-medium group",
  description: "text-sm text-gray-500 mt-1",
  closeButton: "text-gray-500 hover:text-gray-500",
  label: "block text-xs font-medium text-gray-500 mb-2",
  textarea: "w-full rounded-md border text-gray-500 border-gray-200 px-3 py-2 text-sm resize-vertical focus:ring-2 focus:ring-accent",
  error: "mt-3 text-sm text-accent",
  actions: "mt-4 flex justify-end gap-3",
  cancelButton: "px-4 py-2 rounded-md border text-sm",
  generateButton: "px-4 py-2 rounded-md bg-accent text-white text-sm disabled:opacity-60"
};

// src/assets/dummyStyles.js
export const businessProfileStyles = {
  // Layout - Mobile first responsive
  pageContainer: "space-y-6 sm:space-y-8 font-[pacifico] px-4 sm:px-6 lg:px-8",
  
  // Header - Responsive typography
  headerContainer: "text-center lg:text-left",
  headerTitle: "text-2xl sm:text-3xl lg:text-4xl  text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl",
  
  // Cards/Sections - Responsive padding
  cardContainer: "bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-200/60 shadow-sm",
  cardHeaderContainer: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6",
  cardIconContainer: "p-2 rounded-lg w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center",
  cardTitle: "text-lg sm:text-xl font-semibold text-gray-900",
  
  // Grid - Mobile first responsive
  gridCols1: "grid grid-cols-1 gap-4 sm:gap-6",
  gridCols2: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8",
  gridCols2Lg: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8",
  gridColSpan2: "sm:col-span-2",
  
  // Form Elements - Touch-friendly sizing
  label: "block text-xs sm:text-sm font-medium text-gray-700 mb-2",
  input: "w-full rounded-lg sm:rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-sm sm:text-base",
  textarea: "w-full rounded-lg sm:rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-sm sm:text-base",
  
  // Upload Areas - Responsive
  uploadArea: "border-2 sm:border-4 border-dashed border-gray-300 rounded-lg sm:rounded-lg p-4 sm:p-6 transition-all duration-300 hover:border-gray-400 group",
  uploadIconContainer: "w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-base sm:text-xl",
  uploadSmallIconContainer: "w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm sm:text-base",
  uploadTextTitle: "text-xs sm:text-sm font-medium text-gray-900 mt-2 sm:mt-3",
  uploadTextSubtitle: "text-xs text-gray-500 mt-1",
  
  // Image Previews - Responsive sizing
  imagePreviewContainer: "text-center space-y-3 sm:space-y-4",
  logoPreview: "w-32 sm:w-40 h-24 sm:h-32 mx-auto rounded-lg sm:rounded-lg overflow-hidden flex items-center justify-center bg-white",
  stampPreview: "w-24 sm:w-32 h-20 sm:h-24 mx-auto rounded-lg sm:rounded-lg overflow-hidden flex items-center justify-center bg-white",
  signaturePreview: "w-24 sm:w-32 h-16 sm:h-20 mx-auto rounded-lg sm:rounded-lg overflow-hidden flex items-center justify-center bg-white",
  
  // Buttons - Touch-friendly sizing
  buttonGroup: "flex flex-wrap gap-2 justify-center sm:gap-3",
  changeButton: "inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-lg bg-gray-100 text-accent hover:bg-gray-100 transition-all duration-200 cursor-pointer font-medium text-xs sm:text-sm active:scale-95",

  removeButton: "inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-lg bg-gray-100 text-accent hover:bg-gray-100 transition-all duration-200 font-medium text-xs sm:text-sm active:scale-95",

  
  // Tax Section - Responsive
  taxContainer: "bg-gradient-to-br from-gray-100 to-gray-100 rounded-lg sm:rounded-lg p-4 sm:p-6 border border-gray-100",
  taxInput: "w-24 sm:w-32 rounded-lg sm:rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 font-medium text-center text-sm sm:text-base",
  taxHelpText: "text-xs text-gray-500 mt-2 sm:mt-3",
  
  // Action Buttons - Responsive layout
  actionContainer: "bg-white/80 backdrop-blur-xl rounded-lg sm:rounded-lg p-4 sm:p-6 border border-gray-200/60 shadow-sm",
  actionInnerContainer: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4",
  actionButtonGroup: "flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto",
  saveButton:  "inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold text-xs sm:text-sm hover:from-accent hover:to-accent transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
  resetButton:  "inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-xs sm:text-sm active:scale-95",
  
  // Animation
  hoverScale: "group-hover:scale-105 transition-transform duration-300"
};

// Icon colors for different sections
export const iconColors = {
  business: "bg-gray-100 text-accent",
  branding: "bg-gray-100 text-accent", 
  assets: "bg-gray-100 text-accent"
};

// For any custom styles that don't fit the pattern
export const customStyles = {
  inputPlaceholder: "text-gray-500",
  taxPercentage: "text-2xl  text-gray-500"
};

// src/assets/dummyStyles.js (add these to the existing export)
export const aiReminderModalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-black opacity-30",
  modal: "relative max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 z-10",
  title: "text-lg font-semibold",
  description: "text-sm text-gray-500 mt-1",
  closeButton: "text-gray-500 hover:text-gray-500",
  label: "block text-sm font-medium text-gray-700",
  textarea: "mt-1 w-full text-gray-500 rounded-md border border-gray-200 px-3 py-2 text-sm",
  error: "mt-3 text-sm text-accent",
  previewHeader: "text-sm font-medium",
  previewHelper: "text-xs text-gray-500",
  previewBox: "mt-2 bg-gray-50 rounded-md p-3 min-h-[120px] text-sm whitespace-pre-wrap",
  previewPlaceholder: "text-gray-500",
  previewPlaceholderHighlight: "font-medium",
  actions: "mt-4 flex items-center justify-end gap-3",
  resetButton: "px-3 py-2 rounded-md border text-sm",
  copyButton: "px-3 py-2 rounded-md border text-sm",
  copyButtonEnabled: "bg-white hover:bg-gray-50",
  copyButtonDisabled: "opacity-50 cursor-not-allowed",
  generateButton: "px-4 py-2 rounded-md bg-accent text-white text-sm"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const createInvoiceStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",
  mainGrid: "grid lg:grid-cols-3 gap-8",
  leftColumn: "lg:col-span-2 space-y-8",
  rightColumn: "space-y-8",
  
  // Header
  headerContainer: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
  headerTitle: "text-3xl lg:text-4xl  text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-gray-500 max-w-3xl",
  headerButtonContainer: "flex items-center gap-3",
  
  // Cards/Sections
cardContainer: "bg-white/80 backdrop-blur-xl rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200/60 shadow-sm w-full",

cardSmallContainer: "bg-white/80 backdrop-blur-xl rounded-lg p-3 sm:p-4 md:p-6 border border-gray-200/60 shadow-sm w-full",

cardHeaderContainer: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6",


cardHeaderWithButton: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6",

cardHeaderLeft: "flex items-center gap-2 sm:gap-3",

cardIconContainer: "p-2 rounded-lg w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center",

cardTitle: "text-xl sm:text-2xl  text-gray-900",

cardSubtitle: "text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4",


  
  // Grid
  gridCols1: "grid grid-cols-1  gap-6",
  gridCols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  gridCols3: "grid grid-cols-1 md:grid-cols-3 gap-6",
  gridCols2Lg: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  gridColSpan2: "md:col-span-2 ",
  
  // Form Elements
  label: "block text-sm font-medium text-gray-700 mb-2",
  labelWithMargin: "block text-sm font-medium text-gray-700 mb-3",
  input: "w-full rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  inputMedium: "w-full rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 font-medium",
  inputCenter: "w-full rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-center font-medium",
  textarea: "w-full rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  inputSmall: "w-full rounded-lg border text-gray-500 border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-sm",
  
  // Buttons
  previewButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm",
  saveButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold hover:from-accent hover:to-accent transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
  saveProfileButton: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-accent hover:bg-gray-100 transition-all duration-200 text-sm font-medium",
  addItemButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-all duration-200 font-medium w-full justify-center group",
  
  // Currency & Status
  currencyContainer: "flex gap-3",
  currencyButton: "flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 flex-1",
  currencyButtonActive1: "border-accent bg-gray-100 text-accent shadow-sm",
  currencyButtonActive2: "border-accent bg-gray-100 text-accent shadow-sm",
  currencyButtonInactive: "border-gray-200 bg-white text-gray-500 hover:border-gray-300",
  statusContainer: "flex flex-wrap gap-2",
  statusButton: "relative overflow-hidden rounded-full transition-all duration-200 ease-out",
  statusButtonActive: "ring-2 ring-offset-2 ring-accent transform scale-105",
  statusButtonInactive: "opacity-80 hover:opacity-100 hover:scale-105",
  statusDropdown: "mt-2 sm:hidden w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  currencyBadge: "text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg",
  
  // Desktop header (lg+)
  itemsTableHeader:
    "hidden lg:grid lg:grid-cols-12 gap-4 mb-4 px-2 text-sm font-medium text-gray-700 items-center min-w-0",

  // Row: mobile-first grid; becomes 12 cols at sm and above
  itemsTableRow:
    "grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-12 gap-4 items-center group hover:bg-gray-50 p-3 rounded-lg transition-all duration-200 min-w-0",

  // Description input: truncate text on lg to avoid overflow
  itemsInput:
    "rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 w-full min-w-0 overflow-hidden truncate text-sm sm:text-base",

  // Numeric inputs baseline styling (we keep them as text with inputMode for numeric keyboard)
  itemsNumberInput:
    "rounded-lg border border-gray-300 px-3 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 text-right w-full min-w-0 overflow-x-auto whitespace-nowrap text-sm sm:text-base",

  // Total: allow wrapping at break points (we add zero-width-space after commas to permit wraps)
  itemsTotal:
    "text-center font-medium text-gray-900 flex items-center justify-center min-w-0 max-w-full break-words text-left text-sm sm:text-base",

  // Remove button: visible & tap-friendly
  itemsRemoveButton:
    "flex items-center justify-center p-2 rounded-lg text-accent hover:bg-gray-100 transition-all duration-200 focus:outline-none",

  // per-field label: shown below lg (stacked labels)
  itemsFieldLabel: "block text-xs font-medium text-gray-500 mb-1",

  
  itemsListWrapper: "space-y-4",

  itemRow: "min-w-0",

  itemColDescription:
    "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 min-w-0",

  itemColQuantity:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 min-w-0",

  itemColUnitPrice:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-3 min-w-0",

  itemColTotal:
    "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-3 min-w-0",

  itemColRemove:
    "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-1 flex justify-center min-w-0",
  
  // Upload Areas
  uploadArea: "border-4 border-dashed border-gray-300 rounded-lg p-6 transition-all duration-300 hover:border-gray-400 group",
  uploadSmallArea: "border-4 border-dashed border-gray-300 rounded-lg p-6 transition-all duration-300 hover:border-gray-400 group",
  imagePreviewContainer: "text-center space-y-4",
  logoPreview: "w-32 h-24 lg:w-28 lg:h-20  mx-auto  rounded-lg overflow-hidden flex items-center  justify-center ",
  stampPreview: "w-24 h-20 mx-auto  rounded-lg overflow-hidden flex items-center justify-center bg-white",
  signaturePreview: "w-24 h-16 mx-auto  rounded-lg overflow-hidden flex items-center justify-center bg-white",
  buttonGroup: "flex lg:flex-col xl:flex-row  gap-2 justify-center",
  changeButton: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-accent hover:bg-gray-100 transition-all duration-200 cursor-pointer text-sm font-medium",
  removeButton: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-accent hover:bg-gray-100 transition-all duration-200 text-sm font-medium",
  uploadIconContainer: "w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-500",
  uploadSmallIconContainer: "w-10 h-10 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-500",
  uploadTextTitle: "text-sm font-medium text-gray-900",
  uploadTextSubtitle: "text-xs text-gray-500 mt-1",
  
  // Summary & Tax
  summaryRow: "flex items-center justify-between py-3 border-b border-gray-200",
  summaryLabel: "text-sm font-medium text-gray-500",
  summaryValue: "font-semibold text-gray-900",
  taxRow: "flex items-center justify-between py-2",
  totalRow: "flex items-center justify-between py-3 border-t border-gray-200",
  totalLabel: "text-lg font-bold text-gray-900",
  totalValue: "text-lg font-bold text-gray-900",
  
  // Animation
  hoverScale: "group-hover:scale-105 transition-transform duration-300",
  iconHover: "group-hover:scale-110 transition-transform"
};

// Icon colors for different sections
export const createInvoiceIconColors = {
  invoice: "bg-gray-100 text-accent",
  billFrom: "bg-gray-100 text-accent",
  billTo: "bg-gray-100 text-accent",
  items: "bg-gray-100 text-accent"
};

// For any custom styles that don't fit the pattern
export const createInvoiceCustomStyles = {
  inputPlaceholder: "text-gray-500",
  currencySymbol: "text-lg font-semibold"
};

// src/assets/dummyStyles.js (add these to the existing export)
export const appShellStyles = {
  // Layout - Responsive
  root: "min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/30 to-gray-100/20",
  layout: "lg:flex",
  
  // Desktop Sidebar - Hidden on mobile/tablet
  sidebar: "hidden lg:block bg-white/80 backdrop-blur-xl border-r border-gray-200/60 transition-all duration-500 ease-in-out relative",
  sidebarCollapsed: "w-20",
  sidebarExpanded: "w-64 xl:w-80",
  sidebarGradient: "absolute inset-0 bg-gradient-to-b from-gray-100/5 to-transparent pointer-events-none",
  sidebarContainer: "px-4 lg:px-6 py-6 lg:py-8 h-full flex flex-col justify-between relative z-10",
  
  // Logo Area - Responsive sizing
  logoContainer: "mb-8 lg:mb-12 flex items-center",
  logoContainerCollapsed: "justify-center",
  logoLink: "inline-flex items-center group transition-all duration-300 gap-2 lg:gap-3",
  logoImage: "h-12 lg:h-14 w-12 lg:w-14 object-contain drop-shadow-sm",
  logoTextContainer: "",
  logoText: " text-xl lg:text-2xl bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  logoUnderline: "h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent transition-all duration-500 mt-1",
  collapseButton: "p-2 ml-4 lg:ml-6 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 group",
  
  // Navigation - Responsive sizing and spacing
  nav: "space-y-1 lg:space-y-2",
  sidebarLink: "group flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2.5 lg:py-3 rounded-lg lg:rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ease-out touch-manipulation active:scale-95",
  sidebarLinkCollapsed: "justify-center",
  sidebarLinkActive: "bg-gradient-to-r from-gray-100 to-gray-100 text-accent shadow-sm border border-gray-100",
  sidebarLinkInactive: "text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-md",
  sidebarIcon: "w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 flex-shrink-0",
  sidebarIconActive: "text-accent scale-110",
  sidebarIconInactive: "text-gray-500 group-hover:text-gray-500 group-hover:scale-105",
  sidebarText: "flex-1 transition-all duration-300 hidden lg:block",
  sidebarActiveIndicator: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse",
  
  // User Area - Responsive
  userSection: "mt-auto",
  userDivider: "border-t border-gray-200/60 pt-4 lg:pt-6",
  userDividerCollapsed: "px-1",
  userDividerExpanded: "px-2",
  logoutButton: "w-full flex items-center gap-2 lg:gap-3 px-2 lg:px-3 py-2.5 lg:py-3 rounded-lg lg:rounded-lg text-xs lg:text-sm font-medium text-accent hover:bg-gray-100 hover:shadow-sm transition-all duration-300 group active:scale-95",
  logoutIcon: "w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 group-hover:scale-110 transition-transform",
  collapseSection: "mt-3 lg:mt-4 flex justify-center",
  collapseButtonInner: "flex items-center gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 text-xs text-gray-500 hover:text-gray-800",
  collapseButtonCollapsed: "justify-center w-10",
  
  // Mobile Sidebar - Responsive for tablets and phones
  mobileOverlay: "lg:hidden fixed inset-0 z-50",
  mobileBackdrop: "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
  mobileSidebar: "absolute inset-y-0 left-0 w-72 sm:w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/60 p-4 sm:p-6 overflow-y-auto transform transition-transform duration-300 max-h-screen pt-20",
  mobileHeader: "mb-6 sm:mb-8 flex items-center justify-between",
  mobileLogoLink: "inline-flex items-center gap-2",
  mobileLogoImage: "h-9 sm:h-10 w-9 sm:w-10 object-contain",
  mobileLogoText: "font-bold text-base sm:text-lg bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  mobileCloseButton: "p-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300",
  mobileCloseIcon: "w-5 h-5 text-gray-500",
  mobileNav: "space-y-2",
  mobileNavLink: "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300",
  mobileNavLinkActive: "bg-gradient-to-r from-gray-100 to-gray-100 text-accent border border-gray-100",
  mobileNavLinkInactive: "text-gray-500 hover:text-gray-900 hover:bg-white hover:shadow-sm",
  mobileLogoutSection: "mt-8 border-t border-gray-200/60 pt-6",
  mobileLogoutButton: "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-accent hover:bg-gray-100 transition-all duration-300",
  
  // Header
  header: "flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-40 transition-all duration-300 min-h-20",
  headerScrolled: "shadow-sm",
  headerNotScrolled: "shadow-none",
  headerTopSection: "flex items-center justify-between sm:justify-start w-full sm:w-auto py-3 sm:py-0",
  headerContent: "flex items-center gap-3 sm:gap-6",
  mobileMenuButton: "lg:hidden inline-flex items-center justify-center p-2 sm:p-3 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300",
  mobileMenuIcon: "w-5 h-5 text-gray-700",
  desktopCollapseButton: "hidden lg:flex items-center justify-center p-2 rounded-lg border border-gray-200 bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300",
  welcomeContainer: "flex flex-col",
  welcomeTitle: "text-lg sm:text-xl lg:text-2xl  text-gray-900 tracking-tight",
  welcomeName: "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  welcomeSubtitle: "text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1",
  mobileUserAvatar: "lg:hidden flex items-center gap-2",
  mobileAvatar: "w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent flex items-center justify-center text-white text-xs font-semibold shadow-lg",
  
  // Header Actions
  headerActions: "flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pb-3 sm:pb-0 border-t border-gray-100 sm:border-t-0 pt-3 sm:pt-0",
  ctaButton: "group inline-flex  items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-accent hover:to-accent text-sm sm:text-base flex-1 sm:flex-none justify-center",
  ctaIcon: "w-4 h-4 text-white",
  ctaArrow: "w-0 group-hover:w-2 group-hover:ml-1 transition-all duration-300 overflow-hidden hidden sm:block",
  userSectionDesktop: " lg:flex md:flex items-center gap-4 pl-4 border-l border-gray-200/60",
  userInfo: "hidden sm:block text-right",
  userName: "text-sm font-medium text-gray-900",
  userEmail: "text-xs text-gray-500",
  userAvatarContainer: "relative ",
  userAvatar: "w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group",
  userAvatarBorder: "absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300",
  userStatus: "absolute -bottom-1 -right-1 w-4 h-4 bg-gray-100 rounded-full border-2 border-white shadow-sm",
  
  // Main Content
  main: "p-4 sm:p-6 lg:p-8",
  mainContainer: "max-w-7xl mx-auto"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const dashboardStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",
  
  // Header
  headerContainer: "text-center lg:text-left",
  headerTitle: "text-3xl lg:text-4xl  text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0",
  
  // KPI Grid
  kpiGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
  
  // Main Content Grid
  mainGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-8",
  sidebarColumn: "xl:col-span-1 space-y-6",
  contentColumn: "xl:col-span-3",
  
  // Cards
  cardContainer: "bg-white/80 backdrop-blur-xl rounded-lg border border-gray-200/60 shadow-sm",
  cardContainerOverflow: "bg-white/80 backdrop-blur-xl rounded-lg border border-gray-200/60 shadow-sm overflow-hidden",
  
  // Quick Stats Card
  quickStatsCard: "bg-gradient-to-br from-accent to-accent rounded-lg p-6 text-white",
  quickStatsTitle: "font-semibold text-lg mb-4",
  quickStatsRow: "flex justify-between items-center",
  quickStatsLabel: "text-gray-100",
  quickStatsValue: "font-semibold",
  
  // Quick Actions
  quickActionsContainer: "space-y-3",
  quickActionButton: "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
  quickActionIconContainer: "p-2 rounded-lg group-hover:scale-110 transition-transform",
  quickActionText: "font-medium",
  
  // Quick Action Color Variants
  quickActionBlue: "bg-gray-100 text-accent hover:bg-gray-100",
  quickActionGray: "bg-gray-50 text-gray-700 hover:bg-gray-100",
  
  // Table Styles
  tableHeader: "px-6 py-5 border-b border-gray-200/60",
  tableHeaderContent: "flex flex-col sm:flex-row sm:items-center sm:justify-between",
  tableTitle: "text-lg font-semibold text-gray-900",
  tableSubtitle: "text-sm text-gray-500 mt-1",
  tableActionButton: "mt-3 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-accent transition-colors duration-200",
  
  // Table
  tableContainer: "overflow-x-auto",
  table: "w-full",
  tableHead: "bg-gray-50/80 border-b border-gray-200/60",
  tableHeaderCell: "px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tableHeaderCellRight: "px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tableBody: "divide-y divide-gray-200/60",
  tableRow: "hover:bg-gray-50/50 transition-colors duration-150 group cursor-pointer",
  tableCell: "px-6 py-4",
  
  // Client Avatar
  clientAvatar: "w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center text-accent font-medium group-hover:scale-110 transition-transform duration-200",
  clientInfo: "font-medium text-gray-900 group-hover:text-accent transition-colors",
  clientSubInfo: "text-sm text-gray-500",
  
  // Amount Cell
  amountCell: "font-medium text-gray-900",
  
  // Date Cell
  dateCell: "text-sm text-gray-900",
  
  // Action Button
  actionButton: "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-accent hover:bg-gray-100 rounded-lg transition-all duration-200 group/btn",
  
  // Empty State
  emptyState: "px-6 py-12 text-center",
  emptyStateIcon: "w-12 h-12 mx-auto text-gray-300",
  emptyStateText: "text-gray-500 space-y-2",
  emptyStateMessage: "font-medium",
  emptyStateAction: "text-accent hover:text-accent font-medium",
  
  // Color variants for quick action icons
  quickActionIconBlue: "bg-gray-100",
  quickActionIconGray: "bg-gray-100"
};

// src/assets/dummyStyles.js (add these to the existing export)
// Add to src/assets/dummyStyles.js (after the existing styles)

export const invoicesStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",
  
  // Header
  headerContainer: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
  headerTitle: "text-3xl lg:text-4xl  text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-gray-500 max-w-3xl",
  headerActions: "flex items-center gap-3",
  aiButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm group",
  createButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold hover:from-accent hover:to-accent transform hover:scale-105 transition-all duration-200 shadow-lg",
  
  // Stats Overview
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-6",
  statCard: "bg-white/80 backdrop-blur-xl rounded-lg p-6 border border-gray-200/60 shadow-sm",
  statValue: "text-2xl  text-gray-900",
  statLabel: "text-sm text-gray-500 mt-1",
  
  // Filters Section
  filtersCard: "bg-white/80 backdrop-blur-xl rounded-lg p-6 border border-gray-200/60 shadow-sm",
  filtersHeader: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6",
  filtersHeaderLeft: "flex items-center gap-3",
  filtersIconContainer: "p-2 rounded-lg bg-gray-100 text-accent",
  filtersTitle: "text-xl font-semibold text-gray-900",
  filtersCount: "text-sm text-gray-500",
  filtersCountNumber: "font-bold text-gray-900",
  
  // Filters Grid
  filtersGrid: "grid grid-cols-1 lg:grid-cols-5 gap-4",
  searchContainer: "lg:col-span-2",
  filterLabel: "block text-sm font-medium text-gray-700 mb-2",
  searchInputContainer: "relative",
  searchIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  searchInput: "w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  selectInput: "w-full rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  
  // Date Range
  dateRangeContainer: "lg:col-span-2",
  dateRangeFlex: "flex flex-col sm:flex-row sm:items-center gap-3",
  dateInput: "w-full sm:flex-1 min-w-0 rounded-lg border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  dateSeparator: "flex items-center justify-center",
  dateSeparatorText: "text-gray-500 text-sm",
  
  // Filters Footer
  filtersFooter: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-gray-200/60",
  perPageContainer: "flex items-center gap-3",
  perPageLabel: "text-sm font-medium text-gray-700",
  perPageSelect: "rounded-lg border border-gray-300 px-4 py-2 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200",
  resetButton: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium",
  
  // Table Section
  tableCard: "bg-white/80 backdrop-blur-xl rounded-lg border border-gray-200/60 shadow-sm overflow-hidden",
  tableHeader: "px-6 py-5 border-b border-gray-200/60",
  tableHeaderContent: "flex items-center justify-between",
  tableTitle: "text-lg font-semibold text-gray-900",
  tableSubtitle: "text-sm text-gray-500 mt-1",
  tableSubtitleBold: "font-medium text-gray-900",
  
  // Table
  tableContainer: "overflow-x-auto",
  table: "w-full",
  tableHead: "bg-gray-50/80 border-b border-gray-200/60",
  tableHeaderCell: "cursor-pointer px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-gray-100/50 transition-colors duration-150",
  tableHeaderCellRight: "px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider",
  tableHeaderContent: "flex items-center gap-2",
  tableBody: "divide-y divide-gray-200/60",
  tableRow: "hover:bg-gray-50/50 transition-colors duration-150 group",
  
  // Client Cell
  clientCell: "px-6 py-4",
  clientContainer: "flex items-center gap-4",
  clientAvatar: "w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center text-accent font-medium group-hover:scale-110 transition-transform duration-200",
  clientInfo: "font-medium text-gray-900 group-hover:text-accent transition-colors",
  clientId: "text-sm text-gray-500 mt-1",
  clientEmail: "text-xs text-gray-500 mt-1 hidden md:block",
  
  // Amount Cell
  amountCell: "px-6 py-4 font-medium text-gray-900",
  
  // Status Cell
  statusCell: "px-6 py-4",
  
  // Date Cell
  dateCell: "px-6 py-4 text-sm text-gray-900",
  
  // Actions Cell
  actionsCell: "px-6 py-4 text-right",
  actionsContainer: "flex items-center justify-end gap-2",
  viewButton: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-accent hover:bg-gray-100 rounded-lg transition-all duration-200 group/btn",
  sendButton: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-accent hover:bg-gray-100 rounded-lg transition-all duration-200 group/btn",
  buttonIcon: "w-4 h-4 group-hover/btn:scale-110 transition-transform",
  
  // Empty State
  emptyState: "px-6 py-12 text-center",
  emptyStateIconContainer: "w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center",
  emptyStateIcon: "w-8 h-8 text-gray-500",
  emptyStateText: "text-gray-500 space-y-3",
  emptyStateTitle: "font-medium text-lg",
  emptyStateMessage: "text-sm max-w-md mx-auto",
  emptyStateAction: "text-accent hover:text-accent font-medium",
  
  // Pagination
  paginationContainer: "px-6 py-4 bg-gray-50/80 border-t border-gray-200/60",
  
  // Pagination Component
  pagination: "flex items-center justify-between mt-8 pt-6 border-t border-gray-200/60",
  paginationText: "text-sm text-gray-500",
  paginationControls: "flex items-center gap-2",
  paginationButton: "flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
  paginationNumbers: "flex items-center gap-1",
  paginationNumber: "w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200",
  paginationNumberActive: "bg-gradient-to-r from-accent to-accent text-white shadow-lg",
  paginationNumberInactive: "text-gray-500 hover:bg-gray-100"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const featuresStyles = {
  // Section - Responsive padding
  section: "relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden",
  
  // Background Elements - Responsive sizing
  backgroundBlob1: "absolute top-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",
  backgroundBlob2: "absolute top-0 right-0 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000",
  backgroundBlob3: "absolute -bottom-8 left-20 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000",
  
  // Container - Responsive padding
  container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Header - Responsive spacing and typography
  headerContainer: "text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20",
  badge: "inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 border border-gray-100 mb-4 sm:mb-6 text-xs sm:text-sm",
  badgeDot: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 animate-pulse flex-shrink-0",
  badgeText: "text-xs sm:text-sm font-medium text-accent",
  title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-900 tracking-tight px-2 sm:px-0",
  titleGradient: "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  subtitle: "mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0",
  
  // Features Grid - Mobile-first responsive columns
  featuresGrid: "mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative",
  
  // Feature Card - Responsive sizing
  featureCard: "group relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-lg p-5 sm:p-6 lg:p-8 border border-white/60 shadow-sm hover:shadow-lg sm:hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden touch-manipulation active:scale-95",
  featureCardGradient: "absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  featureCardBorder: "absolute inset-0 rounded-lg sm:rounded-lg bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500",
  featureCardContent: "relative flex items-start gap-4 sm:gap-6",
  featureCardIconContainer: "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-lg bg-gradient-to-br from-accent to-accent text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 text-lg sm:text-xl",
  featureCardTextContainer: "flex-1 min-w-0",
  featureCardTitle: "text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-accent transition-colors duration-300 break-words",
  featureCardDescription: "mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300",
  featureCardCta: "mt-3 sm:mt-4 flex items-center text-accent opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300",
  featureCardCtaText: "text-xs sm:text-sm font-medium",
  featureCardCtaIcon: "w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300",
  
  // Bottom CTA - Responsive
  bottomCtaContainer: "mt-12 sm:mt-14 lg:mt-16 text-center px-4 sm:px-0",
  bottomCtaButton: "group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-accent hover:from-accent hover:to-accent text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300",
  bottomCtaButtonText: "Explore All Features",
  bottomCtaButtonIcon: "w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
};

// src/assets/dummyStyles.js (add these to the existing export)
export const heroStyles = {
  // Section - Mobile first responsive padding
  section: "relative min-h-screen pb-8 sm:pb-16 pt-20 sm:pt-24 lg:pt-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100/30 to-gray-100/20",
  
  // Background Elements - Scaled for mobile
  bgElement1: "absolute top-1/4 -left-10 w-40 sm:w-72 h-40 sm:h-72 rounded-full blur-3xl opacity-60 bg-gradient-to-r from-gray-100/40 to-gray-100/40 animate-float-slow",
  bgElement2: "absolute bottom-1/4 -right-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full blur-3xl opacity-50 bg-gradient-to-r from-gray-100/30 to-gray-100/30 animate-float-medium",
  bgElement3: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-gray-100/20 to-gray-100/20 animate-pulse-slow",
  
  // Grid Pattern - Responsive scale
  gridPattern: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]",
  
  // Container - Responsive padding
  container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center",
  
  // Content Column - Responsive spacing
  content: "space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1",
  contentInner: "space-y-4 sm:space-y-6",
  
  // Badge - Responsive sizing
  badge: "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-lg bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-sm text-xs sm:text-sm",
  badgeDot: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-gray-100 to-accent animate-pulse",
  badgeText: "text-xs sm:text-sm font-medium text-gray-700",
  
  // Heading - Mobile-first responsive typography
  heading: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  leading-tight tracking-tight",
  headingLine1: "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent",
  headingLine2: "bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent",
  headingLine3: "text-gray-500",
  
  // Description - Responsive font sizing
  description: "text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-500 leading-relaxed max-w-2xl",
  descriptionHighlight: "font-semibold text-gray-700",
  
  // CTA Buttons - Mobile-first responsive layout
  ctaContainer: "flex flex-col xs:flex-row xs:items-center gap-3 sm:gap-4 lg:gap-6 pt-2",
  primaryButton: "group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold text-sm sm:text-base shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transform hover:scale-105 active:scale-95 transition-all duration-300 hover:from-accent hover:to-accent overflow-hidden w-full xs:w-auto",
  primaryButtonOverlay: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  primaryButtonText: "relative text-xs sm:text-sm",
  primaryButtonIcon: "w-4 sm:w-5 h-4 sm:h-5 relative group-hover:translate-x-1 transition-transform duration-300",
  secondaryButton: "group inline-flex items-center justify-center gap-2 px-5 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-lg bg-white/80 backdrop-blur-xl border border-gray-200/60 text-gray-700 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 hover:border-gray-300/60 w-full xs:w-auto",
  secondaryButtonIcon: "w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-y-0.5 transition-transform duration-300",
  
  // Feature Highlights - Responsive grid
  featuresGrid: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8",
  featureItem: "flex items-start xs:items-center gap-2 sm:gap-3 group",
  featureIcon: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-lg bg-white/80 backdrop-blur-xl border border-gray-200/60 flex items-center justify-center text-sm sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0",
  featureText: "",
  featureLabel: "font-semibold text-gray-900 text-xs sm:text-sm",
  featureDesc: "text-xs sm:text-sm text-gray-500 leading-snug",
  
   demoColumn: "relative w-full order-1 lg:order-2",
  demoFloating1:
    "hidden sm:block absolute -top-6 -left-6 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-gradient-to-br from-gray-100 to-gray-100 blur-xl opacity-60 animate-float-slow pointer-events-none",
  demoFloating2:
    "hidden sm:block absolute -bottom-8 -right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-br from-gray-100 to-gray-100 blur-xl opacity-40 animate-float-medium pointer-events-none",
  demoContainer: "relative group w-full",

  // Main Demo Card - Responsive sizing and padding
  demoCard:
    "bg-white/90 backdrop-blur-xl rounded-lg sm:rounded-lg lg:rounded-lg shadow-md sm:shadow-lg lg:shadow-2xl border border-gray-200/60 p-3 sm:p-5 md:p-6 lg:p-8 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl w-full",
  cardHeader:
    "flex flex-col xs:flex-row items-start xs:items-center justify-between pb-3 sm:pb-4 lg:pb-6 border-b border-gray-200/60 gap-2 xs:gap-3",
  cardLogoContainer: "flex items-center gap-1.5 sm:gap-2 lg:gap-3",
  cardLogo:
    "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-lg bg-gradient-to-br from-accent to-accent flex items-center justify-center text-white font-bold text-xs",
  cardClient: "flex flex-col flex-1",
  cardClientName: "font-bold text-gray-900 text-sm sm:text-base lg:text-lg",
  cardClientGst: "text-xs text-gray-500",
  cardInvoiceInfo: "xs:text-right mt-2 xs:mt-0",
  cardInvoiceLabel: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
  cardInvoiceNumber: "font-bold text-gray-900 text-sm sm:text-base lg:text-lg",
  cardStatus:
    "text-xs text-accent font-medium bg-gray-100 px-2 py-1 rounded-full mt-1",

  // Invoice Items - Responsive text sizing
  itemsContainer: "py-3 sm:py-4 lg:py-6 space-y-2 sm:space-y-3 lg:space-y-4",
  itemRow:
    "flex justify-between items-center group/item hover:bg-gray-50/50 p-1.5 sm:p-2 lg:p-3 rounded-lg transition-colors duration-200",
  itemDot:
    "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-accent to-accent group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0",
  itemDescription: "text-gray-700 font-medium text-xs sm:text-sm lg:text-base flex-1 ml-2",
  itemAmount: "font-semibold text-gray-900 text-xs sm:text-sm lg:text-base",

  // Calculation Breakdown - Responsive spacing
  calculationContainer: "space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-200/60",
  calculationRow: "flex justify-between text-xs sm:text-sm lg:text-base",
  calculationLabel: "text-gray-500 text-xs sm:text-sm lg:text-base",
  calculationValue: "font-medium text-gray-900 text-xs sm:text-sm lg:text-base",
  totalRow:
    "flex justify-between text-base sm:text-lg lg:text-xl font-bold pt-2 sm:pt-3 border-t border-gray-200/60",
  totalLabel: "text-gray-900",
  totalValue:
    "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent font-bold",

  // Action Buttons - Responsive layout
  actionButtons: "flex flex-col xs:flex-row gap-2 sm:gap-3 pt-4 sm:pt-5 lg:pt-6",
  previewButton:
    "flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 transition-all duration-200 group/btn text-xs sm:text-sm",
  previewButtonText:
    "group-hover/btn:translate-x-1 transition-transform duration-200 inline-block",
  sendButton:
    "flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-lg bg-gradient-to-r from-accent to-accent text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 group/btn text-xs sm:text-sm",
  sendButtonText:
    "group-hover/btn:translate-x-1 transition-transform duration-200 inline-block",

  // AI Indicator - Responsive positioning and sizing
  aiIndicator:
    "absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 xl:translate-y-8 lg:translate-y-6 md:translate-y-4 translate-y-10 bg-white/90 backdrop-blur-xl rounded-lg sm:rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 lg:py-3 shadow-md sm:shadow-lg border border-gray-200/60 text-xs sm:text-sm",
  aiIndicatorContent: "flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500",
  aiIndicatorDot: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-100 animate-pulse flex-shrink-0",
  aiIndicatorText: "font-medium text-gray-900 text-xs sm:text-sm",

  // Decorative Accents - Responsive sizing
  cornerAccent1:
    "hidden sm:block absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-t-2 border-r-2 border-accent rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  cornerAccent2:
    "hidden sm:block absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-b-2 border-l-2 border-accent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500",

  // Card Background
  cardBackground:
    "absolute inset-0 -z-10 bg-gradient-to-br from-gray-100/30 to-gray-100/20 rounded-lg sm:rounded-lg lg:rounded-lg blur-xl transform scale-100 sm:scale-105",

  // Scroll Indicator - Responsive positioning
  scrollIndicator: "absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 translate-y-16 sm:translate-y-18 lg:translate-y-20",
  scrollContainer: "flex flex-col items-center pt-8 sm:pt-10 gap-2 text-gray-500",
  scrollText: "text-xs sm:text-sm font-medium",
  scrollBar: "w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center",
  scrollDot: "w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const invoicePreviewStyles = {
  // Layout
  pageContainer: "min-h-screen p-6 bg-gradient-to-br from-gray-50 via-gray-100/30 to-gray-100/20",
  container: "max-w-6xl  mx-auto",
  noPrint: "no-print",

  // Header Actions
  headerContainer: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6",
  headerTitle: "text-3xl lg:text-4xl  text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-gray-500",
  headerInvoiceNumber: "font-semibold text-accent",
  headerActions: "flex flex-wrap items-center gap-3",
  sendReminderButton: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium",
  editInvoiceButton: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium",
  printButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold hover:from-accent hover:to-accent transform hover:scale-105 transition-all duration-200 shadow-lg",

  // Invoice Preview Card
  printArea: "print-preview-container",
  printHeader: "print-preview-header",
  companyInfo: "print-preview-company-info",
  logo: "print-preview-logo",
  invoiceFromLabel: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-1",
  companyName: "text-xl font-bold text-gray-900 mb-2",
  companyAddress: "text-sm text-gray-500 print-preview-address mb-1",
  companyContact: "flex flex-wrap gap-4 text-sm text-gray-500",
  invoiceInfo: "print-preview-invoice-info",
  invoiceTitle: "text-2xl  text-gray-900 mb-2",
  invoiceNumber: "text-lg text-gray-500 mb-4",
  invoiceDetails: "space-y-2 text-sm",
  invoiceDetailRow: "flex justify-between gap-6",
  invoiceDetailLabel: "text-gray-500 font-medium",
  invoiceDetailValue: "font-semibold text-gray-900",

  // Status Colors
  statusPaid: "text-accent",
  statusUnpaid: "text-accent",
  statusOverdue: "text-accent",
  statusDraft: "text-gray-500",

  // Sections
  section: "print-preview-section",
  flexContainer: "print-preview-flex",
  billToLabel: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
  clientName: "font-semibold text-gray-900 text-lg",
  clientDetails: "space-y-1",
  clientText: "text-sm text-gray-500",
  paymentDetailsLabel: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-2",
  paymentDetails: "space-y-2 text-sm",
  paymentDetailRow: "flex justify-between",
  paymentDetailLabel: "text-gray-500",
  paymentDetailValue: "font-medium text-gray-900",

  // Table
  table: "print-preview-table",
  tableHeader: "text-xs font-medium text-gray-500 uppercase tracking-wider",
  tableCell: "font-medium",
  tableCellRight: "text-right",
  tableCellBold: "font-semibold",

  // Notes
  notesLabel: "text-sm font-medium text-gray-700 mb-2",
  notesContent: "text-sm text-gray-500 bg-gray-50 p-3 rounded border",

  // Signature & Stamp
  signatureLabel: "text-sm font-medium text-gray-700 mb-3",
  signatureContainer: "text-center",
  signatureImage: "print-preview-signature mx-auto",
  signatureName: "font-semibold border-t border-gray-300 pt-1",
  signatureTitle: "text-xs text-gray-500 mt-1",
  stampLabel: "text-sm font-medium text-gray-700 mb-3",
  stampContainer: "text-center",
  stampImage: "print-preview-stamp mx-auto",
  placeholderContainer: "h-16 flex items-center justify-center text-sm text-gray-500 border border-dashed border-gray-300 rounded",

  // Totals
  totalsContainer: "print-preview-totals",
  totalsRow: "flex justify-between",
  totalsLabel: "text-sm font-medium text-gray-700",
  totalsValue: "text-sm font-medium text-gray-900",
  totalDivider: "border-t border-gray-300 my-2 pt-2",
  totalAmountLabel: "text-lg font-bold text-gray-900",
  totalAmountValue: "text-lg font-bold text-gray-900",

  // Footer
  footer: "print-preview-section border-t border-gray-300 pt-4",
  footerText: "text-center text-sm text-gray-500",
  footerSubText: "text-center text-xs text-gray-500 mt-2",

  // Empty State
  emptyStateContainer: "max-w-4xl mx-auto",
  emptyStateCard: "bg-white/80 backdrop-blur-xl rounded-lg p-8 border border-gray-200/60 shadow-sm text-center",
  emptyStateIconContainer: "w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-accent mb-4",
  emptyStateIcon: "w-8 h-8",
  emptyStateTitle: "text-xl font-semibold text-gray-900",
  emptyStateMessage: "text-gray-500 mt-2 max-w-md mx-auto",
  emptyStateButton: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold hover:from-accent hover:to-accent transition-all duration-200 shadow-lg"
};
// src/assets/dummyStyles.js (add these to the existing export)
export const pricingStyles = {
  // Section - Responsive padding
  section: "relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden",
  
  // Background Elements - Responsive sizing
  bgElement1: "absolute top-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",
  bgElement2: "absolute top-0 right-0 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000",
  bgElement3: "absolute -bottom-8 left-20 w-40 sm:w-72 h-40 sm:h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000",
  
  // Container - Responsive padding
  container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Header Section - Responsive typography
  headerContainer: "text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16",
  badge: "inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 border border-gray-100 mb-4 sm:mb-6 text-xs sm:text-sm",
  badgeDot: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 animate-pulse flex-shrink-0",
  badgeText: "text-xs sm:text-sm font-medium text-accent",
  title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-900 tracking-tight mb-4 sm:mb-6 px-2 sm:px-0",
  titleGradient: "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  description: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0",
  
  // Billing Toggle - Responsive
  billingToggle: "inline-flex items-center flex-col xs:flex-row gap-2 xs:gap-0 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-lg p-2 border border-gray-200/60 shadow-sm",
  billingButton: "px-3 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 w-full xs:w-auto",
  billingButtonActive: "bg-gradient-to-r from-accent to-accent text-white shadow-lg",
  billingButtonInactive: "text-gray-500 hover:text-gray-900",
  billingBadge: "ml-0 xs:ml-2 text-xs bg-gray-100 text-accent px-2 py-1 rounded-full whitespace-nowrap",
  
  // Pricing Grid - Mobile-first responsive
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 relative mt-10 sm:mt-12 lg:mt-14",
  
  // Additional Info - Responsive
  additionalInfo: "mt-10 sm:mt-14 lg:mt-16 text-center px-4 sm:px-0",
  featuresCard: "bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-lg p-5 sm:p-6 lg:p-8 border border-gray-200/60 shadow-sm max-w-2xl mx-auto",
  featuresTitle: "text-lg sm:text-xl lg:text-2xl  text-gray-900 mb-4",
  featuresGrid: "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500",
  featureItem: "flex items-start xs:items-center gap-2 xs:gap-3",
  featureDot: "w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5 xs:mt-0",
  
  // FAQ CTA - Responsive
  faqCta: "mt-10 sm:mt-12 text-center",
  faqText: "text-sm sm:text-base text-gray-500 mb-4 sm:mb-6",
  contactLink: "text-accent font-semibold hover:text-accent text-xs sm:text-sm transition-colors duration-300"
};

export const pricingCardStyles = {
  // Card Container - Responsive and touch-friendly
  card: "group relative bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-lg lg:rounded-lg p-5 sm:p-6 lg:p-8 border transition-all duration-500 ease-out hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden touch-manipulation active:scale-95",
  cardPopular: "border-2 sm:border-3 lg:border-4 border-gray-100/60 shadow-lg sm:shadow-2xl lg:scale-105 overflow-visible z-10",
  cardRegular: "border-2 sm:border-3 lg:border-4 border-white/60 shadow-sm hover:shadow-lg sm:hover:shadow-2xl",
  
  // Popular Badge - Responsive positioning
  popularBadge: "absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 -translate-x-1/2 z-40",
  popularBadgeContent: "bg-gradient-to-r from-accent to-accent text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg",
  
  // Gradient Overlay
  gradientOverlay: "absolute inset-0 bg-gradient-to-br from-gray-100/30 to-gray-100/20 opacity-60 z-0 pointer-events-none rounded-lg sm:rounded-lg lg:rounded-lg",
  
  // Animated Border
  animatedBorder: "absolute inset-0 rounded-lg sm:rounded-lg lg:rounded-lg bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10",
  
  // Content
  content: "relative z-20",
  
  // Header - Responsive typography
  header: "text-center mb-6 sm:mb-8",
  title: "text-lg sm:text-xl lg:text-2xl ",
  titlePopular: "text-gray-900",
  titleRegular: "text-gray-800",
  description: "text-xs sm:text-sm text-gray-500 mt-2",
  
  // Price - Responsive sizing
  priceContainer: "text-center mb-6 sm:mb-8",
  priceWrapper: "flex items-baseline justify-center gap-1",
  price: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl ",
  pricePopular: "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
  priceRegular: "text-gray-900",
  period: "text-gray-500 text-xs sm:text-sm lg:text-lg",
  annualBadge: "text-xs sm:text-sm text-accent font-medium bg-gray-100 px-2 sm:px-3 py-1 rounded-full mt-2 inline-block",
  
  // Features - Responsive spacing
  featuresList: "space-y-3 sm:space-y-4 mb-6 sm:mb-8",
  featureItem: "flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500",
  featureIcon: "w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs",
  featureIconPopular: "bg-gray-100 text-accent",
  featureIconRegular: "bg-gray-100 text-gray-500",
  featureText: "text-xs sm:text-sm lg:text-base",
  
  // CTA Button - Responsive
  ctaButton: "w-full py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-lg lg:rounded-lg font-semibold text-xs sm:text-sm lg:text-base transition-all cursor-pointer duration-300 group/btn touch-manipulation active:scale-95",
  ctaButtonPopular: "bg-gradient-to-r from-accent to-accent text-white shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl hover:from-accent hover:to-accent transform",
  ctaButtonRegular: "bg-white border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50",
  ctaButtonText: "inline-block transition-transform duration-300",
  ctaButtonTextPopular: "group-hover/btn:translate-x-1",
  ctaButtonTextRegular: "group-hover/btn:translate-y-0.5",
  
  // Decorative Accents
  cornerAccent1: "absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30",
  cornerAccent2: "absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const authStyles = {
  // Layout
  pageContainer: "min-h-screen bg-white text-gray-800 antialiased",
  authContainer: "flex items-center justify-center py-24 px-6",
  authCard: "w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-100 p-8",
  
  // Header
  authTitle: "text-2xl  mb-1",
  authSubtitle: "text-sm text-gray-500 mb-6",
  
  // Error Message
  errorContainer: "mb-4 text-sm text-accent bg-gray-100 border border-gray-100 p-3 rounded",
  
  // Form
  form: "space-y-4",
  formField: "block text-sm font-medium text-gray-700 mb-2",
  input: "w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-accent",
  passwordContainer: "relative",
  passwordInput: "w-full rounded-md border border-gray-200 px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-accent",
  passwordToggle: "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none",
  
  // Button
  submitButton: "w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent transition",
  submitButtonDisabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  
  // Footer Link
  footerContainer: "mt-6 text-center text-sm text-gray-500",
  footerLink: "text-accent hover:underline",
  
  // Icons
  eyeIcon: "w-5 h-5",
  eyeOffIcon: "w-5 h-5"
};

// src/assets/dummyStyles.js (add these to the existing export)
export const navbarStyles = {
  // Header - Fixed with proper z-index
  header: "fixed w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-100",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  nav: "flex items-center justify-between h-16 sm:h-20",
  
  // Logo Section - Responsive sizing
  logoSection: "flex items-center gap-2 sm:gap-4 flex-1 min-w-0",
  logoLink: "inline-flex items-center gap-2 sm:gap-3 flex-shrink-0",
  logoImage: "h-10 sm:h-12 w-10 sm:w-12 object-contain",
  logoText: "font-semibold text-base sm:text-lg tracking-tight hidden xs:inline-block",
  
  // Desktop Navigation - Hide on mobile, show on md+
  desktopNav: "hidden md:flex items-center gap-4 lg:gap-8 ml-4 lg:ml-8",
  navLink: "text-sm lg:text-base hover:text-accent transition-colors whitespace-nowrap",
  navLinkInactive: "text-gray-500 text-sm lg:text-base hover:text-accent transition-colors whitespace-nowrap",
  
  // Desktop Auth Buttons - Hide on mobile
  authSection: "hidden md:flex items-center gap-2 lg:gap-4",
  signInButton: "text-xs sm:text-sm lg:text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 px-3 lg:px-4 py-2 rounded-lg lg:rounded-lg hover:bg-gray-50/80 backdrop-blur-sm active:scale-95",
  signUpButton: "group relative inline-flex items-center justify-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-lg bg-gradient-to-r from-accent to-accent text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 hover:from-accent hover:to-accent overflow-hidden",
  signUpOverlay: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  signUpText: "relative",
  signUpIcon: "w-4 h-4 relative group-hover:translate-x-1 transition-transform duration-300",
  
  // Mobile Menu Button - Show on small screens only
  mobileMenuButton: "md:hidden p-2 sm:p-2.5 rounded-lg sm:rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex-shrink-0 min-h-10 min-w-10",
  mobileMenuIcon: "relative w-5 h-5 sm:w-6 sm:h-6",
  mobileMenuLine1: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300",
  mobileMenuLine1Open: "rotate-45 translate-y-0",
  mobileMenuLine1Closed: "-translate-y-1",
  mobileMenuLine2: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300",
  mobileMenuLine2Open: "opacity-0",
  mobileMenuLine2Closed: "opacity-100",
  mobileMenuLine3: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300",
  mobileMenuLine3Open: "-rotate-45 translate-y-0",
  mobileMenuLine3Closed: "translate-y-1",
  
  // Mobile Menu - Proper mobile layout
  mobileMenu: "md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto",
  mobileMenuContainer: "px-4 sm:px-6 py-3 sm:py-4 space-y-2 sm:space-y-3",
  mobileNavLink: "block text-gray-700 text-base sm:text-lg py-2.5 sm:py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium",
  mobileAuthSection: "pt-2 sm:pt-3 border-t border-gray-200 space-y-2 sm:space-y-3",
  mobileSignIn: "block text-gray-700 text-base sm:text-lg py-2.5 sm:py-3 px-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium",
  mobileSignUp: "block mt-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg sm:rounded-lg bg-gradient-to-r from-accent to-accent text-white text-center font-semibold text-sm sm:text-base hover:from-accent hover:to-accent active:scale-95 transition-all w-full"
};

// Add to src/assets/dummyStyles.js (after the existing styles)

export const kpiCardStyles = {
  // Card Container
  cardContainer: "group relative bg-white/80 backdrop-blur-xl rounded-lg p-6 border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:scale-[1.02] hover:border-gray-300/60 overflow-hidden",
  
  // Background Effects
  animatedBackground: "absolute inset-0 bg-gradient-to-br from-gray-100/0 via-gray-100/0 to-gray-100/0 group-hover:from-gray-100/30 group-hover:via-gray-100/20 group-hover:to-gray-100/10 transition-all duration-500 ease-out",
  cornerAccent: "absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-lg",
  
  // Content
  content: "relative z-10",
  headerContainer: "flex items-center justify-between",
  mainContent: "flex-1 min-w-0",
  iconTrendContainer: "flex items-center gap-3 mb-3",
  
  // Icon
  iconContainer: "p-3 rounded-lg bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-300",
  icon: "w-5 h-5 text-white",
  
  // Trend Badge
  trendBadge: "inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium",
  trendBadgePositive: "text-accent bg-gray-100 border-gray-100",
  trendBadgeNegative: "text-accent bg-gray-100 border-gray-100",
  trendBadgeNeutral: "text-gray-500 bg-gray-50 border-gray-200",
  trendIcon: "w-3 h-3",
  trendIconNegative: "rotate-180",
  
  // Text Content
  textContent: "space-y-2",
  title: "text-sm font-medium text-gray-500 tracking-wide uppercase",
  value: "text-2xl lg:text-3xl  text-gray-900 tracking-tight",
  
  // Hint
  hint: "text-xs text-gray-500 font-medium flex items-center gap-1",
  hintIcon: "w-3 h-3",
  
  // Progress Bar
  progressContainer: "mt-4 space-y-2",
  progressLabels: "flex justify-between text-xs text-gray-500",
  progressBar: "w-full bg-gray-200/60 rounded-full h-1.5 overflow-hidden",
  progressFill: "h-1.5 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out",
  
  // Icon Color Variants
  iconColors: {
    default: "from-accent to-accent",
    revenue: "from-accent to-accent",
    growth: "from-accent to-accent", 
    document: "from-accent to-accent",
    clock: "from-accent to-accent"
  },
  
  // Progress Fill Widths
  progressWidths: {
    revenue: "75%",
    growth: "85%",
    default: "65%"
  }
};

// src/assets/dummyStyles.js (add these to the existing export)
export const loginStyles = {
  // Layout
  root: "min-h-screen bg-white text-gray-800 antialiased",
  container: "flex items-center justify-center py-24 px-6",
  
  // Form Container
  formContainer: "w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-100 p-8",
  title: "text-2xl  mb-1",
  subtitle: "text-sm text-gray-500 mb-6",
  
  // Error Message
  error: "mb-4 text-sm text-accent bg-gray-100 border border-gray-100 p-3 rounded",
  
  // Form
  form: "space-y-4",
  formGroup: "",
  label: "block text-sm font-medium text-gray-700 mb-2",
  input: "w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-accent",
  passwordContainer: "relative",
  passwordInput: "w-full rounded-md border border-gray-200 px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-accent",
  passwordToggle: "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none",
  passwordIcon: "w-5 h-5",
  
  // Remember Me & Forgot Password
  formOptions: "flex items-center justify-between text-sm",
  rememberContainer: "inline-flex items-center gap-2",
  rememberCheckbox: "rounded border-gray-200",
  rememberText: "text-gray-500",
  forgotPassword: "text-accent hover:underline",
  
  // Submit Button
  submitButton: "w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent transition",
  
  // Sign Up Link
  signupContainer: "mt-6 text-center text-sm text-gray-500",
  signupLink: "text-accent hover:underline"
};

// src/assets/dummyStyles.js (add these to the existing export)
export const footerStyles = {
  // Footer Container
  footer: "mt-24 border-t border-gray-100 bg-white",

  // Outer container: mobile = stacked/centered, md+ = row with spaced items; responsive paddings
  container:
    "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0",

  // Copyright Text: smaller on very small screens, larger on lg/xl; centered on mobile, left on md+
  copyright:
    "text-xs sm:text-sm md:text-sm lg:text-base text-gray-500 text-center md:text-left",

  // Links Container: stack on mobile, inline on md+; spacing increases with breakpoints
  links:
    "flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6 mt-2 md:mt-0",

  // Individual link: responsive text sizing and smooth color transition
  link:
    "text-sm md:text-sm lg:text-base text-gray-500 hover:text-accent transition-colors duration-200"
};
