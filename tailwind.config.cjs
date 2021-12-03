module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ]
,
  daisyui: {
    themes: [{"mars":{"primary":"#f95e4d","primary-focus":"#d74742","primary-content":"#eab41f","secondary":"#DAA035","secondary-focus":"#b8872e","secondary-content":"#CA938A","accent":"#7CC071","accent-focus":"#689f60","accent-content":"#CA938A","neutral":"#BA0000","neutral-focus":"#940000","neutral-content":"#eab41f","base-100":"#CE150A","base-200":"#3A0000","base-300":"#290000","base-content":"#eab41f","info":"#2094f3","success":"#009485","warning":"#ff9900","error":"#ff5724"},"xmas":{"primary":"#FF999A","primary-focus":"#d68586","primary-content":"#ffffff","secondary":"#B2E0AE","secondary-focus":"#8fb18c","secondary-content":"#ffffff","accent":"#F3F298","accent-focus":"#c5c37d","accent-content":"#ffffff","neutral":"#546F19","neutral-focus":"#455b15","neutral-content":"#ffffff","base-100":"#7C0C00","base-200":"#F8B229","base-300":"#55741C","base-content":"#F6EBDB","info":"#2AF0FF","success":"#60DCAE","warning":"#DFD43A","error":"#E70E12"},"adventuretime":{"primary":"#2496D4","primary-focus":"#2274a0","primary-content":"#ffffff","secondary":"#E2B02D","secondary-focus":"#a37f24","secondary-content":"#ffffff","accent":"#11929E","accent-focus":"#0b676f","accent-content":"#ffffff","neutral":"#3d4451","neutral-focus":"#2a2e37","neutral-content":"#ffffff","base-100":"#80DD47","base-200":"#ffffff","base-300":"#5EB937","base-content":"#1f2937","info":"#2094f3","success":"#009485","warning":"#ff9900","error":"#ff5724"}}],
  },

}