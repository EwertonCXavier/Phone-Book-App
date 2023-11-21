import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


class ContactController {

  async index(request: Request, response: Response) {
    try {
      let contacts;
      // If we pass the "last_name" attribute, it makes a specific query. Otherwise, it simply does the default request.
      if(Object.keys(request.query).length > 0 && request.query.hasOwnProperty("last_name")) {
        contacts = await prisma.contact.findMany({
          orderBy: {
            id: 'asc'
          },
          where: {
            last_name: {
              contains: request.query["last_name"] as string,
              mode: 'insensitive'
            }
          }
        })
      } else {
        contacts = await prisma.contact.findMany({
          orderBy: {
            id: 'asc',
          }
        });
      }

      return response.status(200).json(contacts);
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(400).json({
          message: e.meta?.cause
        }) 
      }
    }
  }
  async show(request: Request, response: Response) {
    try {
      const { id } = request.params; 
      const contact = await prisma.contact.findUnique({
        where: {
          id: Number(id)
        }
      });

      return response.status(200).json(contact);
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(400).json({
          message: e.meta?.cause
        }) 
      }
    }
  }

  async store(request: Request, response: Response) {
    try {
    const user =  await prisma.contact.create({
      data: request.body
    });
    return response.status(200).json(user)
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(400).json({
          message: e.meta?.cause
        })
      }
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const updatedContact = await prisma.contact.update({
        data: request.body,
        where: {
          id: Number(id)
        }
      });
  
      return response.status(200).json(updatedContact);
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log({e})
        return response.status(400).json({
          message: e.meta?.cause
        })
      }
    }
  }

  async delete(request: Request, response: Response) {
   try {
    const { id } = request.params
    await prisma.contact.delete({
      where: {
        id: Number(id)
      }
    })
     return response.status(204).send();
   } catch (e: unknown) {
      if(e instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(400).json({
          message: e.meta?.cause || 'Unknown error!'
        })
      }
   }
  }

}




module.exports = new ContactController();