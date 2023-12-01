import { useRef } from "react";
import LinkSidebarAdmin from "./LinkSidebarAdmin";

import '../../../../css/admin/sidebar.css';


const SidebarAdmin = () => {
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClick = () => {
        sidebarRef.current.classList.toggle('active');
        if (sidebarRef.current.classList.contains('active')) {
            buttonRef.current.style.transform = "rotate(-180deg)";
            console.log("ture")
        } else{
            buttonRef.current.style.transform = "rotate(0deg)";
            console.log("falase")
        }
        buttonRef.current.style.transition = "1s";

    }

    return (
    <div className="sidebar-admin active" ref={ sidebarRef } id="sidebar-admin">
        <button className="sidebar-admin--button" onClick={ () => handleClick() }>
            <i className="fas fa-arrow-left" ref={ buttonRef }></i>
        </button>
        <a href="/my_profile" className="sidebar-admin__header p-3">
            <div className="sidebar-admin__header--media">
                <img src="/media/images/users/user.png"  />
            </div>

            <div className="sidebar-admin__header--username">
                <p>Jef4zo44</p>
            </div>

        </a>

        <div className="sidebar-admin__content p-2">
            <LinkSidebarAdmin href="/admin" value="Dashboard" icon="fa-solid fa-home"/>
            <LinkSidebarAdmin href="/admin/my_profile" value="Mi cuenta" icon="fa-regular fa-user"/>
            <LinkSidebarAdmin href="/admin/sells" value="Mis Ventas" icon="fa-solid fa-area-chart"/>
            <LinkSidebarAdmin href="/admin/my_notifications" value="Mis notificaciones" icon="fa-regular fa-bell"/>
            <LinkSidebarAdmin href="/admin/wishlist" value="Listas de favoritos" icon="fa-regular fa-heart"/>
            <hr />
            <LinkSidebarAdmin href="/admin/products" value="Productos" icon="fas fa-boxes-stacked"/>
            <LinkSidebarAdmin href="/admin/categories" value="Categorias" icon="fa-solid fa-border-all"/>
            <LinkSidebarAdmin href="/admin/ads" value="Anuncios" icon="fa-solid fa-rectangle-ad"/>
            <hr />
            <LinkSidebarAdmin href="/admin/settings" value="Configuracion" icon="fa-solid fa-gear"/>
            <LinkSidebarAdmin href="/admin/logout" value="Cerrar sesion" icon="fa-solid fa-right-from-bracket"/>
        </div>
    </div>
    );
}

export default SidebarAdmin;
