import { Request, Response } from 'express';
import { User } from '../lib/db/models';

import { IProduct, IUser } from '@models';
import { mockProducts } from '../mock';

export const configureRoutes = async app => {
  try {
    app.get('/', (req: Request, res: Response) =>
      res.send({ message: 'Hello Andrea, backend server up & running' })
    );


    /*
    app.get('/createuser', async (req: Request, res: Response) => {
      try {
        const user = new User({
          firstname: 'Martin',
          lastname: 'Plaun'
        });
        await user.save();

        res.send('ok');

      } catch (err) {
        console.log(err);
        res.send(JSON.stringify(err));
      }
    });
    */

    app.get('/products', async (req: Request, res: Response) => {
      try {
        const products: Array<IProduct> = mockProducts;
        res.send(products);
      } catch (err) {
        console.log(err);
        res.send(JSON.stringify(err));
      }
    });

    app.get('/users', async (req: Request, res: Response) => {
      try {
        const users: Array<IUser> = await User.find({}, 'firstname lastname');
        res.send(users);
      } catch (err) {
        console.log(err);
        res.send(JSON.stringify(err));
      }
    });
  } catch (err) {
    console.log(err);
  }
};
