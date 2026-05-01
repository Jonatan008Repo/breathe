// Cookie consent simple
(function(){
  function setConsent(val){
    localStorage.setItem('cookie_consent', val);
    document.getElementById('cookie-consent').style.display = 'none';
    if(val === 'accepted') loadAdSense();
  }
  function getConsent(){ return localStorage.getItem('cookie_consent'); }
  function loadAdSense(){
    if(document.getElementById('adsbygoogle-script')) return;
    var s = document.createElement('script');
    s.id = 'adsbygoogle-script';
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9646372169685962';
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }
  document.addEventListener('DOMContentLoaded', function(){
    var banner = document.getElementById('cookie-consent');
    if(!banner) return;
    if(getConsent() === 'accepted'){
      banner.style.display = 'none';
      loadAdSense();
      return;
    }
    banner.style.display = 'block';
    document.getElementById('cookie-accept').addEventListener('click', function(){ setConsent('accepted'); });
    document.getElementById('cookie-decline').addEventListener('click', function(){ setConsent('declined'); });
  });
})();
