import { TempBg } from '@/components/common'
import React from 'react'

const Community = () => {
    return (
        <div className="pyke-container-root">
            <div className="pyke-container">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-[#2A525E]">
                    <TempBg size={120} />
                    <div className="z-1 absolute flex h-full w-full flex-col ">
                        <img
                            src="/images/icons/discord.svg"
                            alt="discord"
                            height={60}
                            width={82}
                        />
                        <p className="text-center">
                            Join our Discord now to interact with the community!
                            Please share all your feelings here, so that we can
                            create a better user experience for you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
