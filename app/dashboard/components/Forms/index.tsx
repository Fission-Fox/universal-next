import { useState } from "react";
import Tabs from "../Tabs";
import AccountForm from "./accountInfo";
import ProfileForm from "./profile";

export default function Forms() {
    const [currentForm, setCurrentForm] = useState<string>('My Profile')
    const getCurrentForm = () => {
        switch (currentForm) {
            case 'My Profile':
                return <ProfileForm />
            case 'My Account Info':
                return <AccountForm />
            default:
                break;
        }
    }
    return (
        <div className="w-full" >
            <div className="w-full flex justify-center flex-col">
                <Tabs setCurrentForm={setCurrentForm} currentForm={currentForm} />
                {getCurrentForm()}
            </div>

        </div>
    )
}
