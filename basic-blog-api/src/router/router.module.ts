// // src/app.module.ts
// import { Module } from '@nestjs/common';
// import { RouterModule, Routes } from '@nestjs/core';
// import { AdminModule } from './admin/admin.module';
// import { UsersModule } from './users/users.module';
// import { MetricsModule } from './metrics/metrics.module';

//@Controller('list') // Reso  in lves to: GET /admin/users/list in USerCOntroller

// // 1. Define the hierarchical route tree
// const routes: Routes = [
//   {
//     path: 'admin',
//     module: AdminModule,
//     children: [
//       {
//         path: 'users',
//         module: UsersModule,
//       },
//       {
//         path: 'metrics',
//         module: MetricsModule,
//       },
//     ],
//   },
// ];

// @Module({
//   imports: [
//     // 2. Import the business modules as usual
//     AdminModule,
//     UsersModule,
//     MetricsModule,

//     // 3. Apply the routing tree configuration
//     RouterModule.register(routes),
//   ],
// })
// export class AppModule {}
