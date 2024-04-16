export type navItemProps = {
    id:number,
    name: string,
    icon: JSX.Element | null,
    href: string,
    open: boolean,
    handleNavLinkClick: (id:number) => void,
}