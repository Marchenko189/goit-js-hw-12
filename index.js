import{a as j,i as g,S as v}from"./assets/vendor-CSTHH2rc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const m=(e,t)=>{const o=new URLSearchParams({q:e,page:t,per_page:15,key:"48268337-f168b7768f25a86360e21e8ce",image_type:"photo",orientation:"horizontal",safesearch:!0});return j.get(`https://pixabay.com/api/?${o}`)},y=e=>`
    <li class="js-gallery-card">
    <div class="container-gallery">
     <a class="gallery-link" href="${e.largeImageURL}">
      <img
      class="js-gallery-img"
      src="${e.webformatURL}" 
      alt="${e.tags}" 
      />
      </a>
      <div class="js-gallery-info">
  <p class="js-gallery-stats">
    Likes <span class="js-gallery-span">${e.likes}</span>
    </p>
  <p class="js-gallery-stats">
    Views <span class="js-gallery-span">${e.views}</span>
    </p>
  <p class="js-gallery-stats">
    Comments <span class="js-gallery-span">${e.comments}</span>
    </p>
  <p class="js-gallery-stats">
    Downloads <span class="js-gallery-span">${e.downloads}</span>
  </p>
    </div>
    </div>
    </li>
  `,h=()=>{const e=document.createElement("div");e.textContent="Loading images, please wait...",e.classList.add("loading-container");const t=document.createElement("span");return t.classList.add("loader"),e.appendChild(t),document.body.appendChild(e),e},d=(e,t)=>{t?e.classList.add("show"):e.classList.remove("show")},f=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),l=document.querySelector(".js-load-more-btn");let r=document.querySelector(".loading-container"),n=1,c="";const b=async e=>{try{if(e.preventDefault(),c=e.currentTarget.elements.user_query.value.trim(),c===""){g.warning({title:"Caution",titleColor:"#fff",message:"The field must be filled!",messageColor:"#fff",position:"topRight",color:"#ffa000"});return}n=1,l.classList.add("is-hidden"),r||(r=h()),d(r,!0);const{data:t}=await m(c,n);if(d(r,!1),t.hits.length===0){g.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),u.innerHTML="",f.reset();return}t.totalHits>n*15&&(l.classList.remove("is-hidden"),l.addEventListener("click",L));const o=t.hits.map(s=>y(s)).join("");u.innerHTML=o,new v(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh(),f.reset()}catch(t){console.log(t)}};f.addEventListener("submit",b);const L=async e=>{try{l.classList.add("is-hidden"),n++,r||(r=h()),d(r,!0);const{data:t}=await m(c,n);d(r,!1);const o=t.hits.map(a=>y(a)).join("");u.insertAdjacentHTML("beforeend",o);let s=document.querySelector(".js-gallery-card").getBoundingClientRect();console.log(s),window.scrollBy({top:2*s.height,behavior:"smooth"}),n*15>=t.totalHits?(l.classList.add("is-hidden"),l.removeEventListener("click",L),g.info({titleColor:"#fff",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",position:"topRight",color:"#59a10d"})):l.classList.remove("is-hidden")}catch(t){console.log(t)}};
//# sourceMappingURL=index.js.map
