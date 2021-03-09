import React from 'react';
import { BackProjectModal } from '../../component/organism/back-project-modal';
import { CompleteModal } from '../../component/organism/complete-modal';
import { MenuModal } from "../../component/organism/menu-modal";

export const ModalDefinition = {
    menu: <MenuModal />,
    backProject: <BackProjectModal />,
    complete: <CompleteModal />
}
