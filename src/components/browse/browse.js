import React, { useState, useContext, createContext } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Container, CourseList, Course, DropDownButton, DropDownMenu, DropDownMenuItem, FilterCategory, FilterItem, FilterList, FilterTitle, Title } from './styles'

const DropDownContext = createContext();

function Browse({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Browse.CourseList = function BrowseCourseList({ children, ...props }) {
    return <CourseList {...props}>{children}</CourseList>
}

Browse.Course = function BrowseCourse({ children, ...props }) {
    return <Course {...props}>{children}</Course>
}

Browse.DropDownButton = function BrowseDropDownButton({ children, ...props }) {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <DropDownContext.Provider value={{showDropDown, setShowDropDown}}>
            <DropDownButton {...props} className={showDropDown ? 'show' : 'hide'} onClick={() => {setShowDropDown(!showDropDown)}}>
                {children}
                <ArrowDropDownIcon/>
            </DropDownButton>
        </DropDownContext.Provider>
    )
}

Browse.DropDownMenu = function BrowseDropDownMenu({ children, ...props }) {
    const { showDropDown } = useContext(DropDownContext)

    return <DropDownMenu {...props} className={showDropDown ? 'show' : 'hide'}>{children}</DropDownMenu>
}

Browse.DropDownMenuItem = function BrowseDropDownMenuItem({ children, ...props }) {
    return <DropDownMenuItem {...props}>{children}</DropDownMenuItem>
}

Browse.FilterCategory = function BrowseFilterCategory({ children, ...props }) {
    return <FilterCategory {...props}>{children}</FilterCategory>
}

Browse.FilterItem = function BrowseFilterItem({setFilters, filters, language, children, ...props }) {
    const [active, setActive] = useState(false)

    return (
        <FilterItem {...props} className={active && 'active'} onClick={() => {
            setFilters(filters => (
                !active ? [...filters, language] : [...filters.filter(val => val !== language)]
            ))
            setActive(!active)
        }}>
            {children}
        </FilterItem>
    )
}

Browse.FilterList = function BrowseFilterList({ children, ...props }) {
    return <FilterList {...props}>{children}</FilterList>
}

Browse.FilterTitle = function BrowseFilterTitle({ children, ...props }) {
    return <FilterTitle {...props}>{children}</FilterTitle>
}

Browse.LanguageMenu = function BrowseLanguageMenu({ languages, setSpokenLanguage }) {
    const [language, setLanguage] = useState("English")

    return (
        <Browse.DropDownButton>
             {language}
             <Browse.DropDownMenu>
                {languages.map((language) => (
                    <Browse.DropDownMenuItem key={language.id} onClick={() => {
                        setLanguage(language.name)
                        setSpokenLanguage(language.name)
                    }}>

                        {language.name}
                    </Browse.DropDownMenuItem>
                ))}
             </Browse.DropDownMenu>
        </Browse.DropDownButton>
    )
}

Browse.Title = function BrowseTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Browse