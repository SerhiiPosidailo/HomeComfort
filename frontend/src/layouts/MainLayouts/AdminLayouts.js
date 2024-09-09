import React from 'react';
import {HeaderAdmin} from "../../components/Header/HeaderAdmin";
import {Outlet} from "react-router-dom";

const AdminLayouts = () => {
    return (
        <div>
            <HeaderAdmin/>
            <Outlet/>
        </div>
    );
};

export {AdminLayouts};