
const navigationItemSeo = document.querySelector('.servis_item-seo')
const navigationItemEmail = document.querySelector('.servis_item-email')
const navigationItemMobile = document.querySelector('.servis_item-mobile')
const navigationItemGoogleAds = document.querySelector('.servis_item-google_ads')
const navigationItemMediaAds = document.querySelector('.servis_item-media_ads')
const navigationItemDigital = document.querySelector('.servis_item-digital')
const serviesContent = document.querySelector('.servies__content-seo')
const serviesNoFles = document.querySelector('.servies__content-no-filles')

navigationItemSeo.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = '#F4AB00'
    navigationItemEmail.style.backgroundColor = 'white'
    navigationItemMobile.style.backgroundColor = 'white'
    navigationItemGoogleAds.style.backgroundColor = 'white'
    navigationItemMediaAds.style.backgroundColor = 'white'
    navigationItemDigital.style.backgroundColor = 'white'
    serviesContent.className = 'servies__content-seo'
    serviesNoFles.className = 'deactive'
})
navigationItemEmail.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = 'white'
    navigationItemEmail.style.backgroundColor = '#F4AB00'
    navigationItemMobile.style.backgroundColor = 'white'
    navigationItemGoogleAds.style.backgroundColor = 'white'
    navigationItemMediaAds.style.backgroundColor = 'white'
    navigationItemDigital.style.backgroundColor = 'white'
    serviesContent.className = 'deactive'
    serviesNoFles.className = 'servies__content-no-filles'
})
navigationItemMobile.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = 'white'
    navigationItemEmail.style.backgroundColor = 'white'
    navigationItemMobile.style.backgroundColor = '#F4AB00'
    navigationItemGoogleAds.style.backgroundColor = 'white'
    navigationItemMediaAds.style.backgroundColor = 'white'
    navigationItemDigital.style.backgroundColor = 'white'
    serviesContent.className = 'deactive'
    serviesNoFles.className = 'servies__content-no-filles'
})
navigationItemGoogleAds.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = 'white'
    navigationItemEmail.style.backgroundColor = 'white'
    navigationItemMobile.style.backgroundColor = 'white'
    navigationItemGoogleAds.style.backgroundColor = '#F4AB00'
    navigationItemMediaAds.style.backgroundColor = 'white'
    navigationItemDigital.style.backgroundColor = 'white'
    serviesContent.className = 'deactive'
    serviesNoFles.className = 'servies__content-no-filles'
})
navigationItemMediaAds.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = 'white'
    navigationItemEmail.style.backgroundColor = 'white'
    navigationItemMobile.style.backgroundColor = 'white'
    navigationItemGoogleAds.style.backgroundColor = 'white'
    navigationItemMediaAds.style.backgroundColor = '#F4AB00'
    navigationItemDigital.style.backgroundColor = 'white'
    serviesContent.className = 'deactive'
    serviesNoFles.className = 'servies__content-no-filles'
})
navigationItemDigital.addEventListener('click', function (){
    navigationItemSeo.style.backgroundColor = 'white'
    navigationItemEmail.style.backgroundColor = 'white'
    navigationItemMobile.style.backgroundColor = 'white'
    navigationItemGoogleAds.style.backgroundColor = 'white'
    navigationItemMediaAds.style.backgroundColor = 'white'
    navigationItemDigital.style.backgroundColor = '#F4AB00'
    serviesContent.className = 'deactive'
    serviesNoFles.className = 'servies__content-no-filles'
})


