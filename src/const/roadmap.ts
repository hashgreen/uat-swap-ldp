export interface IIRoadmapItemProps {
    descKey: string
}

export interface IRoadmapProps {
    titleKey: string
    titleColor: RoadmapTitleColorType
    items: IIRoadmapItemProps[]
}

export enum RoadmapTitleColorType {
    LightGreen,
    LightBlue,
    BlueGreen,
}

export const roadmapList: IRoadmapProps[] = [
    {
        titleKey: 'roadmap-2022_Q4',
        titleColor: RoadmapTitleColorType.LightGreen,
        items: [
            {
                descKey: 'roadmap-2022_Q4_1',
            },
            {
                descKey: 'roadmap-2022_Q4_2',
            },
        ],
    },
    {
        titleKey: 'roadmap-2023_Q1',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                descKey: 'roadmap-2023_Q1_1',
            },
            {
                descKey: 'roadmap-2023_Q1_2',
            },
            {
                descKey: 'roadmap-2023_Q1_3',
            },
            {
                descKey: 'roadmap-2023_Q1_4',
            },
        ],
    },
    {
        titleKey: 'roadmap-2023_Q2',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                descKey: 'roadmap-2023_Q2_1',
            },
            {
                descKey: 'roadmap-2023_Q2_2',
            },
            {
                descKey: 'roadmap-2023_Q2_3',
            },
        ],
    },
    {
        titleKey: 'roadmap-2023_Q3',
        titleColor: RoadmapTitleColorType.LightBlue,
        items: [
            {
                descKey: 'roadmap-2023_Q3_1',
            },
        ],
    },
    {
        titleKey: 'roadmap-2023_H2',
        titleColor: RoadmapTitleColorType.BlueGreen,
        items: [
            {
                descKey: 'roadmap-2023_H2_1',
            },
        ],
    },
]
