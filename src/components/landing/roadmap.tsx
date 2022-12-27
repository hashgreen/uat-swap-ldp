import {
    IRoadmapProps,
    roadmapList,
    RoadmapTitleColorType,
} from '@/assets/const/roadmap'
import classNames from 'classnames'
import React from 'react'

const RoadmapItem = ({ roadmap }: { roadmap: IRoadmapProps }) => {
    return (
        <div className="relative pl-11">
            <div className="absolute top-0 left-0 h-10 w-10">
                <img src="src/assets/common/star.svg" alt="star" />
            </div>
            <div className="flex flex-col">
                <p
                    className={classNames(
                        'my-2 text-2xl',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.LightGreen &&
                            'text-[#ABE661]',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.LightBlue && 'text-[#84CAFF]',
                        roadmap.titleColor ===
                            RoadmapTitleColorType.BlueGreen && 'text-[#55EED2]'
                    )}
                >
                    {roadmap.title}
                </p>
                {roadmap.items.map((item) => (
                    <div className="my-1 w-fit rounded-xl bg-[#1F3338] py-2 px-4 lg:rounded-3xl">
                        <p className="mr-1 text-sm lg:text-base">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Roadmap = () => {
    return (
        <div className="pyke-container-root mb-20">
            <div className="pyke-container">
                <div className="flex flex-col items-center justify-center">
                    <p className="ldp-section-title">Roadmap</p>
                    <div className="relative mt-8 flex w-full max-w-[550px] flex-col gap-y-8">
                        {/* timeline */}
                        <div className="absolute left-5 h-full border" />
                        {roadmapList.map((roadmap) => (
                            <RoadmapItem roadmap={roadmap} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
