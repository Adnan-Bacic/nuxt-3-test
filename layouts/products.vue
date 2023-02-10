<template>
<div>
    <header>
        <nav>
            <p>title - products</p>
            <ul>
                <li>
                    <NuxtLink to="/">home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">products</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products/product">product</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products/1">id</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</div>
<!--output-->
<slot></slot>

<div>
    <p>
        under slot
    </p>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>