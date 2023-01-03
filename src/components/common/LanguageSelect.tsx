import { GADiv } from '@/components/common'
import { useClickOutside } from '@/hook'
import classNames from 'classnames'
import React, { ReactElement, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface IProps {
    className?: string
}

interface ILanguageProps {
    name: string
    code: string
}

const languageList: ILanguageProps[] = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: '繁體中文',
        code: 'zh-TW',
    },
    // NOTE : hide cn first
    // {
    //     name: '简体中文',
    //     code: 'zh-CN',
    // },
]

const MenuItem = ({
    item,
    handleClick,
}: {
    item: ILanguageProps
    handleClick: (code: string) => void
}) => {
    return (
        <GADiv
            category="switch-language"
            action="Click"
            label={item.code}
            className="h-full cursor-pointer py-3 px-4 text-base text-white hover:bg-[#35464B]"
            onClick={() => {
                handleClick(item.code)
            }}
        >
            <p>{item.name}</p>
        </GADiv>
    )
}

const LanguageSelect = ({ className }: IProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const { i18n } = useTranslation()

    useClickOutside(
        ref,
        () => {
            setOpen(false)
        },
        'mousedown'
    )

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleItemClick = (code: string) => {
        i18n.changeLanguage(code)
        setOpen(false)
    }

    return (
        <div
            ref={ref}
            className={classNames(
                className,
                'relative flex items-center justify-center'
            )}
        >
            <div
                className="relative h-7 w-7 cursor-pointer"
                onClick={handleToggle}
            >
                <img src="/images/icons/language.svg" alt="language" />
            </div>
            {open && (
                <div className="absolute -bottom-3 right-0 w-[180px] translate-y-full rounded-xl border border-[#2A525E] bg-[#0B2127] py-3">
                    {languageList.map((language) => (
                        <MenuItem
                            key={language.code}
                            item={language}
                            handleClick={handleItemClick}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSelect
