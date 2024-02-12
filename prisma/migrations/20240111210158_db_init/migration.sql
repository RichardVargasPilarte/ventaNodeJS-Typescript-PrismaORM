-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMINISTRADOR', 'BODEGUERO', 'VENDEDOR');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "apellido" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMINISTRADOR',
    "username" VARCHAR(30) NOT NULL,
    "tipo_documento" VARCHAR(20) NOT NULL,
    "num_documento" VARCHAR(30) NOT NULL,
    "direccion" VARCHAR(75) NOT NULL,
    "telefono" VARCHAR(10) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(30) NOT NULL,
    "apellido" VARCHAR(30) NOT NULL,
    "tipo_persona" VARCHAR(20) NOT NULL,
    "tipo_documento" VARCHAR(20) NOT NULL,
    "num_documento" VARCHAR(30) NOT NULL,
    "direccion" VARCHAR(75) NOT NULL,
    "telefono" VARCHAR(10) NOT NULL,
    "email" TEXT NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingreso" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "tipo_comprobante" VARCHAR(20) NOT NULL,
    "serie_comprobante" VARCHAR(20) NOT NULL,
    "num_comprobante" VARCHAR(15) NOT NULL,
    "impuesto" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingreso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detalle_Ingreso" (
    "id" TEXT NOT NULL,
    "articulo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "ingresoId" TEXT NOT NULL,

    CONSTRAINT "Detalle_Ingreso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venta" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "tipo_comprobante" VARCHAR(20) NOT NULL,
    "serie_comprobante" VARCHAR(20) NOT NULL,
    "num_comprobante" VARCHAR(15) NOT NULL,
    "impuesto" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detalle_Venta" (
    "id" TEXT NOT NULL,
    "articulo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "descuento" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ventaId" TEXT NOT NULL,

    CONSTRAINT "Detalle_Venta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articulo" (
    "id" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "codigo" VARCHAR(64) NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "precio_venta" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "eliminado" TEXT NOT NULL DEFAULT 'NO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Articulo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_email_key" ON "Persona"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Articulo_nombre_key" ON "Articulo"("nombre");

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingreso" ADD CONSTRAINT "Ingreso_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Ingreso" ADD CONSTRAINT "Detalle_Ingreso_ingresoId_fkey" FOREIGN KEY ("ingresoId") REFERENCES "Ingreso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Venta" ADD CONSTRAINT "Detalle_Venta_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articulo" ADD CONSTRAINT "Articulo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
