<template>
    <!--? Aufteilen in 2 Components ?-->
    <nav>

        <div class="bg-white flex h-14 px-5 justify-between p-4 md:hidden"> <!--TODO ALIGN ITEMS-->
            <div>
                <RouterLink to="/user">
                    <i class="fas fa-user"></i>
                </RouterLink>
            </div>
            <div>
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div class="bg-white flex justify-between h-14 py-4 px-24 hidden md:flex"> <!--TODO ALIGN ITEMS-->
            <div>
                Logo
            </div>
            <div class="flex gap-2"> <!--TODO ALIGN ITEMS-->
                <RouterLink to="/">
                    Home
                </RouterLink>
                <RouterLink to="/addnew">
                    Add
                </RouterLink>
                <RouterLink to="/user">
                    User
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
