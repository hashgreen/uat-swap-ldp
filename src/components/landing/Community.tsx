import { TempBg } from '@/components/common'
import { communityList } from '@/const/community'
import React from 'react'

const Community = () => {
    return (
        <div className="pyke-container-root mb-12 sm:mb-16 md:mb-20">
            <div className="pyke-container">
                <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl border border-[#2A525E] xl:mb-20">
                    <TempBg size={120} />
                    <div className="z-1 absolute flex h-full w-full flex-col items-center justify-center gap-y-8 px-8 sm:px-11">
                        <img
                            src="/images/icons/discord.svg"
                            alt="discord"
                            height={60}
                            width={82}
                        />
                        <p className="section-desc max-w-[440px] text-center">
                            Join our Discord now to interact with the community!
                            Please share all your feelings here, so that we can
                            create a better user experience for you!
                        </p>
                        <div className="flex cursor-pointer flex-row rounded-xl bg-[#21B8E1] px-5 py-3">
                            <p className="uppercase">Join Our Community</p>
                            <img
                                src="/images/icons/linkArrow.svg"
                                alt="link"
                                className="ml-3"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    {communityList.map((community) => (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-[#2A525E] py-8 xl:flex-1">
                            <img
                                src={community.src}
                                alt={community.alt}
                                className="h-8 md:h-10"
                            />
                            <p className="section-desc mt-6 md:mt-8">
                                {community.desc}
                            </p>
                            <div className="mt-8 flex cursor-pointer flex-row rounded-xl border border-[#497684] px-5 py-3 md:mt-12">
                                <p className="uppercase">Follow</p>
                                <img
                                    src="/images/icons/linkArrow.svg"
                                    alt="link"
                                    className="ml-3"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Community
