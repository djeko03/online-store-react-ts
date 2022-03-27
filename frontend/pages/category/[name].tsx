import {useRouter} from "next/router";
import {Title} from "../../components/title";
import {MainLayout} from "../../layout/main-layout";
import scss from '../../components/category/index.module.scss'
import Link from "next/link";
import {Button, EArrow, ETypeButton} from "../../components/button";
import React from "react";
import {products2} from "../../server/products";
import {Product} from "../../components/product";
import Category from "../../components/category";

export default function Categories() {

    const {query} = useRouter()

    return (
        <MainLayout>
            <Category name={query.name}/>
        </MainLayout>
    )
}