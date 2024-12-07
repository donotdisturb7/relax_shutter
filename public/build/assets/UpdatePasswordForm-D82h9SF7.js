import{r as m,T as _,c as i,b as o,a as e,u as r,e as c,G as y,w as g,o as w,f as v,d as x}from"./app-BI7OEea5.js";import{_ as l,a as n}from"./InputLabel-ByDm36jB.js";import{P as V}from"./PrimaryButton-Briqroc2.js";import{_ as d}from"./TextInput-Do9Sxgfw.js";/* empty css            */import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},T={__name:"UpdatePasswordForm",setup(b){const u=m(null),p=m(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),p.value.focus())}})};return(S,a)=>(w(),i("section",null,[a[4]||(a[4]=o("header",null,[o("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Update Password "),o("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Ensure your account is using a long, random password to stay secure. ")],-1)),o("form",{onSubmit:g(f,["prevent"]),class:"mt-6 space-y-6"},[o("div",null,[e(n,{for:"current_password",value:"Current Password"}),e(d,{id:"current_password",ref_key:"currentPasswordInput",ref:p,modelValue:r(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(n,{for:"password",value:"New Password"}),e(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:r(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",null,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),o("div",k,[e(V,{disabled:r(s).processing},{default:c(()=>a[3]||(a[3]=[v("Save")])),_:1},8,["disabled"]),e(y,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:c(()=>[r(s).recentlySuccessful?(w(),i("p",P," Saved. ")):x("",!0)]),_:1})])],32)]))}};export{T as default};
