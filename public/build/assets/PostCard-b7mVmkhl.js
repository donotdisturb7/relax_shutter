import{o as r,c as a,b as e,r as m,j as N,Q as A,a as i,e as _,u,i as b,f as L,t as n,d as p,F as y,k,n as C,g as O,E as P,D as w}from"./app-BI7OEea5.js";import{a as R}from"./AuthenticatedLayout-D73ka3ot.js";function S(o,h){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"})])}function q(o,h){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})])}function H(o,h){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})])}function T(o,h){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})])}const I={class:"bg-white rounded-lg shadow-sm mb-4 p-4"},Q={class:"flex items-center justify-between mb-4"},U={class:"flex items-center space-x-3"},W={class:"text-sm text-gray-500"},G={key:0,class:"relative"},J={key:0,class:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"},K={class:"mb-4"},X={class:"text-gray-800 whitespace-pre-wrap"},Y={key:0,class:"mb-4"},ee={class:"grid grid-cols-2 gap-2"},te=["src","alt","onClick"],se=["onClick"],oe={class:"text-sm text-gray-600"},re={class:"flex items-center justify-between pt-4 border-t"},ae={class:"flex space-x-4"},ne={key:1,class:"mt-4 pt-4 border-t"},le={class:"mb-4"},ie=["disabled"],ce={class:"space-y-4"},de=["src","alt"],ue={class:"flex-1"},he={class:"bg-gray-100 rounded-lg p-3"},me={class:"font-semibold"},pe={class:"text-gray-700"},ve={class:"mt-1 text-sm text-gray-500"},we={__name:"PostCard",props:{post:{type:Object,required:!0}},emits:["deleted"],setup(o,{emit:h}){const l=o,j=h,v=m(!1),g=m(!1),c=m(""),f=m(l.post.has_reacted),$=N(()=>l.post.user.id===A().props.auth.user.id),x=t=>new Date(t).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),M=t=>t.startsWith("image/"),V=async()=>{try{const t=await w.post(route("posts.reaction",l.post.id));f.value=t.data.current_user_has_reaction,l.post.reactions_count=t.data.num_of_reactions}catch(t){console.error("Erreur lors de la réaction:",t)}},B=async()=>{if(c.value.trim())try{const t=await w.post(route("posts.comments.store",l.post.id),{comment:c.value});l.post.comments.unshift(t.data),l.post.comments_count++,c.value=""}catch(t){console.error("Erreur lors de l'ajout du commentaire:",t)}},D=async()=>{if(confirm("Êtes-vous sûr de vouloir supprimer ce post ?"))try{await w.delete(route("posts.destroy",l.post.id)),j("deleted")}catch(t){console.error("Erreur lors de la suppression:",t)}},Z=()=>{},E=t=>{window.location.href=route("posts.attachment.download",t.id)},z=t=>{};return(t,d)=>(r(),a("div",I,[e("div",Q,[e("div",U,[i(u(b),{href:t.route("profile",o.post.user.username)},{default:_(()=>[i(R,{user:o.post.user,size:"md"},null,8,["user"])]),_:1},8,["href"]),e("div",null,[i(u(b),{href:t.route("profile",o.post.user.username),class:"font-semibold hover:underline"},{default:_(()=>[L(n(o.post.user.name),1)]),_:1},8,["href"]),e("p",W,n(x(o.post.created_at)),1)])]),$.value?(r(),a("div",G,[e("button",{onClick:d[0]||(d[0]=s=>v.value=!v.value),class:"p-1 rounded-full hover:bg-gray-100"},[i(u(H),{class:"w-6 h-6 text-gray-500"})]),v.value?(r(),a("div",J,[e("div",{class:"py-1"},[e("button",{onClick:Z,class:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Modifier "),e("button",{onClick:D,class:"block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"}," Supprimer ")])])):p("",!0)])):p("",!0)]),e("div",K,[e("p",X,n(o.post.content),1)]),o.post.attachments&&o.post.attachments.length?(r(),a("div",Y,[e("div",ee,[(r(!0),a(y,null,k(o.post.attachments,s=>(r(),a("div",{key:s.id,class:"relative aspect-square rounded-lg overflow-hidden"},[M(s.mime)?(r(),a("img",{key:0,src:`/storage/${s.path}`,alt:s.name,class:"w-full h-full object-cover",onClick:F=>z()},null,8,te)):(r(),a("div",{key:1,class:"w-full h-full flex items-center justify-center bg-gray-100",onClick:F=>E(s)},[i(u(q),{class:"w-12 h-12 text-gray-400"}),e("span",oe,n(s.name),1)],8,se))]))),128))])])):p("",!0),e("div",re,[e("div",ae,[e("button",{onClick:V,class:C(["flex items-center space-x-1 text-gray-500 hover:text-blue-500",{"text-blue-500":f.value}])},[i(u(T),{class:C(["w-6 h-6",{"fill-current":f.value}])},null,8,["class"]),e("span",null,n(o.post.reactions_count||0),1)],2),e("button",{onClick:d[1]||(d[1]=s=>g.value=!g.value),class:"flex items-center space-x-1 text-gray-500 hover:text-blue-500"},[i(u(S),{class:"w-6 h-6"}),e("span",null,n(o.post.comments_count||0),1)])])]),g.value?(r(),a("div",ne,[e("div",le,[O(e("textarea",{"onUpdate:modelValue":d[2]||(d[2]=s=>c.value=s),placeholder:"Ajouter un commentaire...",class:"w-full p-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500",rows:"2"},null,512),[[P,c.value]]),e("button",{onClick:B,class:"mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",disabled:!c.value.trim()}," Commenter ",8,ie)]),e("div",ce,[(r(!0),a(y,null,k(o.post.comments,s=>(r(),a("div",{key:s.id,class:"flex space-x-3"},[e("img",{src:s.user.avatar_path?`/storage/${s.user.avatar_path}`:"/images/default-avatar.png",alt:s.user.name,class:"w-8 h-8 rounded-full"},null,8,de),e("div",ue,[e("div",he,[e("p",me,n(s.user.name),1),e("p",pe,n(s.comment),1)]),e("div",ve,n(x(s.created_at)),1)])]))),128))])])):p("",!0)]))}};export{we as _};
