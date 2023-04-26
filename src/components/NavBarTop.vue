<template>
    <!--? Aufteilen in 2 Components ?-->
    <nav>

        <div class="bg-white flex h-14 px-5 justify-between p-4 md:hidden"> <!--TODO ALIGN ITEMS-->

            <div class="flex gap-3 items-center">
                <i class="fas fa-code"></i>
                <h2>Coding Resources</h2>
            </div>
        </div>
        <div class="bg-white flex justify-between h-14 py-4 px-24 hidden md:flex"> <!--TODO ALIGN ITEMS-->
            <div class="flex gap-3 items-center">
                <i class="fas fa-code"></i>
                <h2>Coding Resources</h2>
            </div>
            <div class="flex gap-2"> <!--TODO ALIGN ITEMS-->
                <RouterLink :to="{ name: 'home' }">
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'addnew' }">
                    Add
                </RouterLink>
                <RouterLink :to="{ name: 'user' }">
                    User
                </RouterLink>
                <a href="https://github.com/sbstn98/coding-resources-vue-app"><i class="fa-brands fa-github ml-2"></i> Code
                </a>
            </div>
        </div>
    </nav>
</template>
