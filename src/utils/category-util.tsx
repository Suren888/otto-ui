import React from "react";
import ICategoryData from "../types/category-type";
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


export const parseCategory = (categories:Array<ICategoryData>, parentID: Number) => {
    return categories.filter((category) => category.parentCategoryId === parentID).map(paCat => {
        const childs = getChilds(paCat.category_id, categories);
        return childs.length === 0 ? 
        <MenuItem routerLink={<Link to={`/${paCat.name}`} />}>{paCat.name}</MenuItem> : 
        <SubMenu label={paCat.name}>
            {parseCategory(categories, paCat.category_id)}
        </SubMenu>
    })  
}

export const getChilds = (parentCatID: Number, categories:Array<ICategoryData>) => {
    return categories.filter(cat => cat.parentCategoryId === parentCatID);
}