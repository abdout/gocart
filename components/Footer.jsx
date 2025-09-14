import Link from "next/link";

const Footer = () => {

    const MailIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.6654 4.66699L8.67136 8.48499C8.46796 8.60313 8.23692 8.66536 8.0017 8.66536C7.76647 8.66536 7.53544 8.60313 7.33203 8.48499L1.33203 4.66699M2.66536 2.66699H13.332C14.0684 2.66699 14.6654 3.26395 14.6654 4.00033V12.0003C14.6654 12.7367 14.0684 13.3337 13.332 13.3337H2.66536C1.92898 13.3337 1.33203 12.7367 1.33203 12.0003V4.00033C1.33203 3.26395 1.92898 2.66699 2.66536 2.66699Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const PhoneIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.22003 11.045C9.35772 11.1082 9.51283 11.1227 9.65983 11.086C9.80682 11.0493 9.93692 10.9636 10.0287 10.843L10.2654 10.533C10.3896 10.3674 10.5506 10.233 10.7357 10.1404C10.9209 10.0479 11.125 9.99967 11.332 9.99967H13.332C13.6857 9.99967 14.0248 10.1402 14.2748 10.3902C14.5249 10.6402 14.6654 10.9794 14.6654 11.333V13.333C14.6654 13.6866 14.5249 14.0258 14.2748 14.2758C14.0248 14.5259 13.6857 14.6663 13.332 14.6663C10.1494 14.6663 7.09719 13.4021 4.84675 11.1516C2.59631 8.90119 1.33203 5.84894 1.33203 2.66634C1.33203 2.31272 1.47251 1.97358 1.72256 1.72353C1.9726 1.47348 2.31174 1.33301 2.66536 1.33301H4.66536C5.01899 1.33301 5.35812 1.47348 5.60817 1.72353C5.85822 1.97358 5.9987 2.31272 5.9987 2.66634V4.66634C5.9987 4.87333 5.9505 5.07749 5.85793 5.26263C5.76536 5.44777 5.63096 5.60881 5.46536 5.73301L5.15336 5.96701C5.03098 6.06046 4.94471 6.1934 4.90923 6.34324C4.87374 6.49308 4.89122 6.65059 4.9587 6.78901C5.86982 8.63959 7.36831 10.1362 9.22003 11.045Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const MapPinIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.3346 6.66634C13.3346 9.99501 9.64197 13.4617 8.40197 14.5323C8.28645 14.6192 8.14583 14.6662 8.0013 14.6662C7.85677 14.6662 7.71615 14.6192 7.60064 14.5323C6.36064 13.4617 2.66797 9.99501 2.66797 6.66634C2.66797 5.25185 3.22987 3.8953 4.23007 2.89511C5.23026 1.89491 6.58681 1.33301 8.0013 1.33301C9.41579 1.33301 10.7723 1.89491 11.7725 2.89511C12.7727 3.8953 13.3346 5.25185 13.3346 6.66634Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.0013 8.66634C9.10587 8.66634 10.0013 7.77091 10.0013 6.66634C10.0013 5.56177 9.10587 4.66634 8.0013 4.66634C6.89673 4.66634 6.0013 5.56177 6.0013 6.66634C6.0013 7.77091 6.89673 8.66634 8.0013 8.66634Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const FacebookIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.9987 1.66699H12.4987C11.3936 1.66699 10.3338 2.10598 9.55242 2.88738C8.77102 3.66878 8.33203 4.72859 8.33203 5.83366V8.33366H5.83203V11.667H8.33203V18.3337H11.6654V11.667H14.1654L14.9987 8.33366H11.6654V5.83366C11.6654 5.61265 11.7532 5.40068 11.9094 5.2444C12.0657 5.08812 12.2777 5.00033 12.4987 5.00033H14.9987V1.66699Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const InstagramIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5846 5.41699H14.593M5.83464 1.66699H14.168C16.4692 1.66699 18.3346 3.53247 18.3346 5.83366V14.167C18.3346 16.4682 16.4692 18.3337 14.168 18.3337H5.83464C3.53345 18.3337 1.66797 16.4682 1.66797 14.167V5.83366C1.66797 3.53247 3.53345 1.66699 5.83464 1.66699ZM13.3346 9.47533C13.4375 10.1689 13.319 10.8772 12.9961 11.4995C12.6732 12.1218 12.1623 12.6265 11.536 12.9417C10.9097 13.2569 10.2 13.3667 9.50779 13.2553C8.81557 13.1439 8.1761 12.8171 7.68033 12.3213C7.18457 11.8255 6.85775 11.1861 6.74636 10.4938C6.63497 9.80162 6.74469 9.0919 7.05991 8.46564C7.37512 7.83937 7.87979 7.32844 8.50212 7.00553C9.12445 6.68261 9.83276 6.56415 10.5263 6.66699C11.2337 6.7719 11.8887 7.10154 12.3944 7.60725C12.9001 8.11295 13.2297 8.76789 13.3346 9.47533Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const TwitterIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.3346 3.33368C18.3346 3.33368 17.7513 5.08368 16.668 6.16701C18.0013 14.5003 8.83464 20.5837 1.66797 15.8337C3.5013 15.917 5.33464 15.3337 6.66797 14.167C2.5013 12.917 0.417969 8.00034 2.5013 4.16701C4.33464 6.33368 7.16797 7.58368 10.0013 7.50034C9.2513 4.00034 13.3346 2.00034 15.8346 4.33368C16.7513 4.33368 18.3346 3.33368 18.3346 3.33368Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const LinkedinIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.3346 6.66699C14.6607 6.66699 15.9325 7.19378 16.8702 8.13146C17.8079 9.06914 18.3346 10.3409 18.3346 11.667V17.5003H15.0013V11.667C15.0013 11.225 14.8257 10.801 14.5131 10.4885C14.2006 10.1759 13.7767 10.0003 13.3346 10.0003C12.8926 10.0003 12.4687 10.1759 12.1561 10.4885C11.8436 10.801 11.668 11.225 11.668 11.667V17.5003H8.33464V11.667C8.33464 10.3409 8.86142 9.06914 9.7991 8.13146C10.7368 7.19378 12.0086 6.66699 13.3346 6.66699Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M5.0013 7.50033H1.66797V17.5003H5.0013V7.50033Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M3.33464 5.00033C4.25511 5.00033 5.0013 4.25413 5.0013 3.33366C5.0013 2.41318 4.25511 1.66699 3.33464 1.66699C2.41416 1.66699 1.66797 2.41318 1.66797 3.33366C1.66797 4.25413 2.41416 5.00033 3.33464 5.00033Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const GitHubIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 1.25C5.16785 1.25 1.25 5.16785 1.25 10C1.25 13.9206 3.77411 17.2611 7.31548 18.4371C7.81548 18.5246 8 18.2306 8 17.9746V16.2996C5.66071 16.8996 5.09375 15.1496 5.09375 15.1496C4.63393 13.8371 3.98214 13.5496 3.98214 13.5496C3.09375 12.9246 4.04911 12.9371 4.04911 12.9371C5.03125 13.0121 5.5375 13.9496 5.5375 13.9496C6.40625 15.4496 7.78125 15.0121 8.03125 14.8996C8.11607 14.2496 8.38393 13.8121 8.67857 13.6996C6.73214 13.5871 4.6875 12.7496 4.6875 9.18707C4.6875 8.1246 5.06696 7.24957 5.55357 6.5621C5.45536 6.4496 5.10714 5.4621 5.64732 4.1121C5.64732 4.1121 6.46875 3.8496 7.99107 4.8746C8.78571 4.6246 9.64286 4.4996 10.5 4.4996C11.3571 4.4996 12.2143 4.6246 13.0089 4.8746C14.5312 3.8496 15.3527 4.1121 15.3527 4.1121C15.8929 5.4621 15.5446 6.4496 15.4464 6.5621C15.933 7.24957 16.3125 8.1246 16.3125 9.18707C16.3125 12.7621 14.2589 13.5871 12.3036 13.6996C12.6696 14.0246 13 14.6621 13 15.6371V17.9746C13 18.2306 13.1845 18.5246 13.6845 18.4371C17.2259 17.2611 19.75 13.9206 19.75 10C19.75 5.16785 15.8322 1.25 10 1.25Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>)
    const WhatsAppIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.0667 2.925C16.0222 1.875 14.7556 1.05833 13.3556 0.533332C11.9556 0.00833321 10.4556 -0.133334 8.98333 0.133332C4.125 1.04167 0.375 5.20833 0.833333 10.2583C0.958333 11.7917 1.45833 13.275 2.275 14.5583L0.208333 19.7917L5.64167 17.7583C6.84167 18.4917 8.19167 18.875 9.58333 18.875C14.7 18.875 18.9167 14.6583 18.9167 9.54167C18.9167 7.3 18.0583 5.175 16.5 3.61667L17.0667 2.925ZM9.58333 17.3083C8.375 17.3083 7.19167 16.9583 6.175 16.3L5.85 16.1083L2.95833 16.8833L3.74167 14.0583L3.525 13.7167C2.80833 12.65 2.425 11.4167 2.425 10.1417C2.425 6.25 5.6 3.075 9.48333 3.075C11.3583 3.075 13.1417 3.80833 14.4667 5.13333C15.7917 6.45833 16.525 8.24167 16.525 10.1167C16.5667 14.0083 13.4 17.1833 9.58333 17.3083ZM13.4583 11.975C13.2333 11.8583 12.125 11.3167 11.925 11.2417C11.725 11.1667 11.5833 11.125 11.4417 11.35C11.3 11.575 10.8917 12.075 10.775 12.2167C10.6583 12.3583 10.5417 12.375 10.3167 12.25C9.26667 11.775 8.375 11.1583 7.65833 10.3667C7.45833 10.1 7.85833 10.125 8.225 9.44167C8.28333 9.3 8.25 9.175 8.19167 9.05833C8.13333 8.94167 7.69167 7.83333 7.51667 7.39167C7.34167 6.96667 7.16667 7.025 7.04167 7.01667C6.925 7.00833 6.78333 7.00833 6.64167 7.00833C6.5 7.00833 6.26667 7.06667 6.06667 7.29167C5.86667 7.51667 5.275 8.05833 5.275 9.16667C5.275 10.275 6.09167 11.3417 6.20833 11.4833C6.325 11.625 7.69167 13.7167 9.775 14.675C11.1083 15.2583 11.7 15.3 12.375 15.2C12.8417 15.1333 13.725 14.6917 13.9 14.2C14.075 13.7083 14.075 13.2833 14.0167 13.1917C13.9583 13.1 13.8167 13.0417 13.5917 12.925L13.4583 11.975Z" fill="#90A1B9" /> </svg>)

    const linkSections = [
        {
            title: "PRODUCTS",
            links: [
                { text: "Earphones", path: '/', icon: null },
                { text: "Headphones", path: '/', icon: null },
                { text: "Smartphones", path: '/', icon: null },
                { text: "Laptops", path: '/', icon: null },
            ]
        },
        {
            title: "WEBSITE?",
            links: [
                { text: "Home", path: '/', icon: null },
                { text: "Privacy Policy", path: '/', icon: null },
                { text: "Become Plus Member", path: '/pricing', icon: null },
                { text: "Create Your Store", path: '/create-store', icon: null },
            ]
        },
        {
            title: "CONTACT",
            links: [
                { text: "sales@databayt.org", path: 'mailto:sales@databayt.org', icon: MailIcon },
                { text: "+966 55 772 1603", path: 'tel:+966557721603', icon: PhoneIcon },
                { text: "Riyadh, Saudi Arabia", path: '/', icon: MapPinIcon }
            ]
        }
    ];

    const socialIcons = [
        { icon: GitHubIcon, link: "https://github.com/databayt" },
        { icon: LinkedinIcon, link: "https://www.linkedin.com/company/databayt-auto" },
        { icon: FacebookIcon, link: "https://www.facebook.com/profile.php?id=61579954895228" },
        { icon: WhatsAppIcon, link: "https://wa.me/00966557721603" },
    ]

    return (
        <footer className="mx-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-500/30 text-slate-500">
                    <div>
                        <Link href="/" className="text-4xl font-semibold text-slate-700">
                            <span className="text-green-600">go</span>cart<span className="text-green-600 text-5xl leading-0">.</span>
                        </Link>
                        <p className="max-w-[410px] mt-6 text-sm">Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.</p>
                        <div className="flex items-center gap-3 mt-5">
                            {socialIcons.map((item, i) => (
                                <Link href={item.link} key={i} className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full">
                                    <item.icon />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm ">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-medium text-slate-700 md:mb-5 mb-3">{section.title}</h3>
                                <ul className="space-y-2.5">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {link.icon && <link.icon />}
                                            <Link href={link.path} className="hover:underline transition">{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="py-4 text-sm text-slate-500">
                    Copyright 2025 © gocart All Right Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;