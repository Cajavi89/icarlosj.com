const d=document, w=window;

export default function HeaderScrolling(){
  const $logo = d.querySelector(".logo"),
    $menu=d.querySelector(".panel-menu")


  d.addEventListener("scroll",e=> {
    const $scroll=w.scrollY
    
    if($scroll>100){
      $logo.classList.add("is-active-h");
      $menu.classList.add("is-active-h");
      
    }else{
      $logo.classList.remove("is-active-h")
      $menu.classList.remove("is-active-h");

    }
    
  })
}