import { ApiPropertyOptional, IntersectionType, PartialType, PickType } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsOptional } from "class-validator";
import { IOrganizationTeam } from "@gauzy/contracts";
import { TenantOrganizationBaseDTO } from "./../../core/dto";
import { RelationalTagDTO } from "./../../tags/dto";
import { OrganizationTeam } from "./../organization-team.entity";

export class OrganizationTeamDTO extends IntersectionType(
    IntersectionType(TenantOrganizationBaseDTO, PartialType(RelationalTagDTO)),
    PickType(OrganizationTeam, ['logo', 'prefix', 'imageId'])
) implements Omit<IOrganizationTeam, 'name'> {

    /**
     * Team type should be boolean true/false
     */
    @ApiPropertyOptional({ type: () => Boolean })
    @IsOptional()
    @IsBoolean()
    readonly public?: boolean;

    @ApiPropertyOptional({ type: () => String, isArray: true })
    @IsOptional()
    @IsArray()
    readonly memberIds?: string[] = [];

    @ApiPropertyOptional({ type: () => String, isArray: true })
    @IsOptional()
    @IsArray()
    readonly managerIds?: string[] = [];
}
