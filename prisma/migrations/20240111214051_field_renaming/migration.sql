/*
  Warnings:

  - You are about to drop the column `precio_venta` on the `Articulo` table. All the data in the column will be lost.
  - You are about to drop the column `num_comprobante` on the `Ingreso` table. All the data in the column will be lost.
  - You are about to drop the column `serie_comprobante` on the `Ingreso` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_comprobante` on the `Ingreso` table. All the data in the column will be lost.
  - You are about to drop the column `num_documento` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_documento` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_persona` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `num_documento` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_documento` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `num_comprobante` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the column `serie_comprobante` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_comprobante` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `precioVenta` to the `Articulo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numComprobante` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serieComprobante` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoComprobante` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numDocumento` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDocumento` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPersona` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numDocumento` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDocumento` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numComprobante` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serieComprobante` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoComprobante` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articulo" DROP COLUMN "precio_venta",
ADD COLUMN     "precioVenta" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Ingreso" DROP COLUMN "num_comprobante",
DROP COLUMN "serie_comprobante",
DROP COLUMN "tipo_comprobante",
ADD COLUMN     "numComprobante" VARCHAR(15) NOT NULL,
ADD COLUMN     "serieComprobante" VARCHAR(20) NOT NULL,
ADD COLUMN     "tipoComprobante" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "Persona" DROP COLUMN "num_documento",
DROP COLUMN "tipo_documento",
DROP COLUMN "tipo_persona",
ADD COLUMN     "numDocumento" VARCHAR(30) NOT NULL,
ADD COLUMN     "tipoDocumento" VARCHAR(20) NOT NULL,
ADD COLUMN     "tipoPersona" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "num_documento",
DROP COLUMN "tipo_documento",
ADD COLUMN     "numDocumento" VARCHAR(30) NOT NULL,
ADD COLUMN     "tipoDocumento" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "num_comprobante",
DROP COLUMN "serie_comprobante",
DROP COLUMN "tipo_comprobante",
ADD COLUMN     "numComprobante" VARCHAR(15) NOT NULL,
ADD COLUMN     "serieComprobante" VARCHAR(20) NOT NULL,
ADD COLUMN     "tipoComprobante" VARCHAR(20) NOT NULL;
