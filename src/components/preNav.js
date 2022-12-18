import React from 'react'
import '../style/PreNav.css'
 
const preNav = () => {
   const cartIcon =<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.225 21.35q-.7 0-1.187-.487-.488-.488-.488-1.188t.488-1.2q.487-.5 1.187-.5.7 0 1.2.487.5.488.5 1.213 0 .7-.487 1.188-.488.487-1.213.487Zm9.525 0q-.7 0-1.2-.487-.5-.488-.5-1.188t.5-1.2q.5-.5 1.2-.5t1.188.487q.487.488.487 1.213 0 .7-.487 1.188-.488.487-1.188.487ZM6.05 5.775l2.55 5.3h6.9l2.9-5.3Zm-1.7 10.65 2.825-5.05-3.6-7.575H1.7V2.4h2.75l.925 1.975h15.4l-4.45 8.1H8.15l-1.4 2.55h11.675v1.4Zm4.25-5.35h6.9Z"/></svg>
  return (
    <>
      <div className="PreNav">
        <div>
          <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
          <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
          <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
          <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
        </div>
        <div>
          <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
          <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
          <a href="https://store.mi.com/in/site/login"> <span> {cartIcon}</span>  CART (0)</a>

        </div>

      </div>
    </>
  )
}

export default preNav
