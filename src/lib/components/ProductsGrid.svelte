<div class="web-big-padding-section-level-2">
    <div class="container">
        <h3 class="text-label text-primary text-center">Explora intefraciones similares</h3>
        <ul class="l-grid-1 mt-8">
            <li>
                <a
                    href="/docs/products/auth"
                    class="web-card product-card is-transparent block h-full"
                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                >
                    <div class="flex items-center gap-2">
                        <img
                            src="/images/icons/illustrated/dark/auth.png"
                            alt=""
                            class=""
                            width="32"
                            height="32"
                        />
                        <h4 class="text-body text-primary">Autenticación</h4>
                        <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                    </div>
                    <p class="text-sub-body ml-1">
                        Construye una autenticación segura y gestiona tus usuarios.
                    </p>
                </a>
            </li>
            <li>
                <a
                    href="/docs/products/functions"
                    class="web-card product-card is-transparent block h-full"
                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                >
                    <div class="flex items-center gap-2">
                        <img
                            src="/images/icons/illustrated/dark/functions.png"
                            alt=""
                            class=""
                            width="32"
                            height="32"
                        />
                        <h4 class="text-body text-primary">Funciones</h4>
                        <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                    </div>
                    <p class="text-sub-body ml-1">
                        Escala a lo grande y desbloquea un potencial ilimitado con las funciones de
                        Appwrite.
                    </p>
                </a>
            </li>
            <li>
                <a
                    href="/docs/products/databases"
                    class="web-card product-card is-transparent block h-full"
                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                >
                    <div class="flex items-center gap-2">
                        <img
                            src="/images/icons/illustrated/dark/databases.png"
                            alt=""
                            class=""
                            width="32"
                            height="32"
                        />
                        <h4 class="text-body text-primary">Bases de datos</h4>
                        <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                    </div>
                    <p class="text-sub-body ml-1">
                        Almacena y consulta datos estructurados, asegurando un almacenamiento
                        escalable.
                    </p>
                </a>
            </li>
            <li>
                <a
                    href="/docs/products/messaging"
                    class="web-card product-card is-transparent block h-full"
                    style="--card-padding:1.5rem;--card-padding-mobile:1.5rem;"
                >
                    <div class="flex items-center gap-2">
                        <img
                            src="/images/icons/illustrated/dark/messaging.png"
                            alt=""
                            class=""
                            width="32"
                            height="32"
                        />
                        <h4 class="text-body text-primary">Mensajería</h4>
                        <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                    </div>
                    <p class="text-sub-body ml-1">
                        Gestiona el proyecto de tus archivos utilizando APIs y utilidades
                        convenientes.
                    </p>
                </a>
            </li>
            <li>
                <a
                    href="/docs/apis/realtime"
                    class="web-card product-card is-transparent block h-full"
                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                >
                    <div class="flex items-center gap-2">
                        <img
                            src="/images/icons/illustrated/dark/realtime.png"
                            alt=""
                            class=""
                            width="32"
                            height="32"
                        />
                        <h4 class="text-body text-primary">Tiempo-real</h4>
                        <span class="icon-arrow-right ml-0" aria-hidden="true"></span>
                    </div>
                    <p class="text-sub-body ml-1">
                        Utiliza información en tiempo real de todos los servicios de Appwrite.
                    </p>
                </a>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    .l-grid-1 {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;

        @media (max-width: 600px) {
            gap: 1.25rem;
        }

        .product-card {
            transition: all 100ms ease-in-out;
            box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0);

            &:hover {
                box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.12);
            }
        }
    }
</style>
