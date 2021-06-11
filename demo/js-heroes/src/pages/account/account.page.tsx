import React from "react";

import "../../common-components/common.scss";
import AccountHeader from "./components/account-header.component/account-header.component";
import AccountBody from "./components/body/account-profile-form.componet";
import AccountMenu from "./components/Menu/account-menu.component/account-menu.component";

export default function UserProfilePage() {
    return (
        <div className="grid-container debug">
            <AccountHeader></AccountHeader>
            <AccountMenu></AccountMenu>
            <AccountBody></AccountBody>
        </div>
    );
}
