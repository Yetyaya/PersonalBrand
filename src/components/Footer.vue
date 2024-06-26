<template lang="pug">
footer
  .container
    .area
      RouterLink.logo(to='/')
        img(src='/images/logo.svg' alt='logo')
      .info
        p 若有數位產品設計和開發相關問題
        p 歡迎填寫表單，或直接與我聯絡！
      .subInfo
        a(href='mailto:service@hexschool.com?subject=您好，我想與您合作。&body=如果您看到這封 Email，請回覆我，期待與您合作，謝謝！') service@hexschool.com
    .area
      RouterLink.button(to='/contact')
        SvgIcon.icon(name='list')
        p 填寫表單
      a.button(href='https://www.instagram.com/hexschool/' target='_blank')
        SvgIcon.icon(name='ig')
        p hexschool_demo
      a.button(href='https://www.facebook.com/hexschool' target='_blank')
        SvgIcon.icon(name='fb')
        p hexschoolTW
</template>
