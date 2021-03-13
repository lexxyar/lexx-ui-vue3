const buttonRoutes = [
    {
        path: "/button-solid",
        name: "Solid buttons",
        component: () => import('../views/Buttons/ButtonSolid.vue'),
    },
    {
        path: "/button-rounded",
        name: "Rounded buttons",
        component: () => import('../views/Buttons/ButtonRounded.vue'),
    },
    {
        path: "/button-pill",
        name: "Pill buttons",
        component: () => import('../views/Buttons/ButtonPill.vue'),
    },
    {
        path: "/button-flat",
        name: "Flat buttons",
        component: () => import('../views/Buttons/ButtonFlat.vue'),
    },
]

export default buttonRoutes