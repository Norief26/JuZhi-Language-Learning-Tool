import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Container, Course, CourseData, CourseList, CourseImage, CourseSection, DropDownButton, DropDownMenu, DropDownMenuItem, FilterCategory, FilterHeader, FilterItem, FilterSection, Title } from './styles'
import * as ROUTES from '../../constants/routes'

const DropDownContext = createContext();

function Browse({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Browse.Course = function BrowseCourse({ children, ...props }) {
    return <Course {...props}>{children}</Course>
}

Browse.CourseData = function BrowseCourseData({ children, ...props }) {
    return <CourseData {...props}>{children}</CourseData>
}

Browse.CourseList = function BrowseCourseList({ children, ...props }) {
    return <CourseList {...props}>{children}</CourseList>
}

Browse.CourseImage = function BrowseCourseImage({ children, ...props }) {
    return <CourseImage {...props}>{children}</CourseImage>
}

Browse.CourseSection = function BrowseCourseSection({ children, ...props }) {
    return <CourseSection {...props}>{children}</CourseSection>
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

Browse.FilterHeader = function BrowseFilterHeader({ children, ...props }) {
    return <FilterHeader {...props}>{children}</FilterHeader>
}

Browse.FilterItem = function BrowseFilterItem({setFilters, languageName, children, ...props }) {
    const [active, setActive] = useState(false)

    return (
        <FilterItem {...props} className={active && 'active'} onClick={() => {
            setFilters(filters => (
                !active ? [...filters, languageName] : [...filters.filter(val => val !== languageName)]
            ))
            setActive(!active)
        }}>
            {children}
        </FilterItem>
    )
}

Browse.FilterSection = function BrowseFilterSection({ children, ...props }) {
    return <FilterSection {...props}>{children}</FilterSection>
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
    return (
        <Title {...props}>
            <Link to={ROUTES.HOME}>
                <ArrowBackIcon/>
            </Link>
            <h1>Browse Courses</h1>
        </Title>
    )
}

export default Browse