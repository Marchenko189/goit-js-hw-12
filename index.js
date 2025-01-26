import{i,S as p}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const u=e=>fetch(`https://pixabay.com/api/?q=${e}&key=48268337-f168b7768f25a86360e21e8ce&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),f=e=>`
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
  `,g=()=>{const e=document.createElement("div");e.textContent="Loading images, please wait...",e.classList.add("loading-container");const s=document.createElement("span");return s.classList.add("loader"),e.appendChild(s),document.body.appendChild(e),e},c=(e,s)=>{s?e.classList.add("show"):e.classList.remove("show")},n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),m=e=>{e.preventDefault();const s=e.currentTarget.elements.user_query.value.trim();if(s===""){i.warning({title:"Caution",titleColor:"#fff",message:"The field must be filled!",messageColor:"#fff",position:"topRight",color:"#ffa000"});return}let a=document.querySelector(".loading-container");a||(a=g()),c(a,!0),u(s).then(o=>{if(c(a,!1),o.hits.length===0){i.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",position:"topRight",color:"#ef4040"}),d.innerHTML="",n.reset();return}const t=o.hits.map(l=>f(l)).join("");d.innerHTML=t,new p(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{a.classList.remove("show"),console.log(o)}),n.reset()};n.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
