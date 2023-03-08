<template>
    <!--? Aufteilen in 2 Components ?-->
    <nav>
        <div class="bg-white flex h-14 px-5 justify-between p-4 md:hidden"> <!--TODO ALIGN ITEMS-->
            <div>
                <i class="fas fa-user"></i>
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
                <p>Home</p>
                <p>About</p>
            </div>
        </div>
    </nav>
</template>
