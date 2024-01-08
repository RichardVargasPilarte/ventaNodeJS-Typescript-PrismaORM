/*
  Warnings:

  - Added the required column `updatedAt` to the `Articulo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articulo" ADD COLUMN     "eliminado" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Ingreso" ADD COLUMN     "eliminado" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Persona" ADD COLUMN     "eliminado" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eliminado" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
