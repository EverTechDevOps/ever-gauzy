import { forwardRef, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { GauzyAIService } from '@gauzy/integration-ai';
import { TimeLog } from './../core/entities/internal';
import { Employee } from './employee.entity';
import { UserModule } from './../user/user.module';
import { CommandHandlers } from './commands/handlers';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { AuthModule } from './../auth/auth.module';
import { EmailModule } from '../email/email.module';
import { UserOrganizationModule } from '../user-organization/user-organization.module';
import { TenantModule } from '../tenant/tenant.module';
import { RoleModule } from './../role/role.module';

@Module({
	imports: [
		RouterModule.forRoutes([{ path: '/employee', module: EmployeeModule }]),
		TypeOrmModule.forFeature([Employee, TimeLog]),
		forwardRef(() => EmailModule),
		forwardRef(() => UserOrganizationModule),
		CqrsModule,
		forwardRef(() => TenantModule),
		forwardRef(() => UserModule),
		RoleModule,
		forwardRef(() => AuthModule),
	],
	controllers: [EmployeeController],
	providers: [EmployeeService, GauzyAIService, ...CommandHandlers],
	exports: [TypeOrmModule, EmployeeService],
})
export class EmployeeModule {}
