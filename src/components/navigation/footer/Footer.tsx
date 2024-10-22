import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import linkedin from "@/../public/linkedin.svg"
import youtube from "@/../public/youtube.svg"
import twitter from "@/../public/twitter.svg"
import instagram from "@/../public/instagram.svg"
import facebook from "@/../public/facebook.svg"

const Footer = () => {
    return (
        <footer className='border-t px-6 sm:px-12 md:px-18 py-2 flex flex-col md:flex-row justify-between items-center gap-3'>
            <Link href={"/"}
                className='flex items-center'
            >
                <Image
                    src={"https://hrk-boutique.s3.ap-south-1.amazonaws.com/Interro.AI.png"}
                    alt='InterroAI'
                    width={80}
                    height={80}
                    className='w-20 h-auto md:w-auto'
                    priority
                />
                <span className='text-2xl font-bold text-primary'>Interro.AI</span>
            </Link>
            <div className="flex flex-col gap-1 text-[#4b4c4e]">
                <h3 className="text-lg font-normal">Made by <Link href={"http://github.com/muhammadAhsaanAbbasi"} className='hover:underline'>M. Ahsaan Abbasi</Link> </h3>
                <div className='flex flex-col justify-center gap-4'>
                    <h4 className="text-lg font-medium">Connect with me on social media:</h4>
                    <div className="flex items-center gap-2">
                        <Link href={'https://www.linkedin.com/in/mahsaanabbasi-fullstack-cloud-ai-developer/'}>
                            <Image src={linkedin}
                                alt="LinkedIn"
                                width={40} height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href={'https://www.youtube.com/@humanity2666'}>
                            <Image src={youtube}
                                alt="YouTube"
                                width={40} height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href={'https://x.com/Muhamma99141099'}>
                            <Image src={twitter}
                                alt="twitter"
                                width={40} height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href={"https://www.instagram.com/m_ahsaan_abbasi"}>
                            <Image src={instagram}
                                alt="Instagram"
                                width={40} height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                        <Link href={"https://www.facebook.com/ahsaan.abbasi.334/"}>
                            <Image src={facebook}
                                alt="Facebook"
                                width={40} height={40}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer