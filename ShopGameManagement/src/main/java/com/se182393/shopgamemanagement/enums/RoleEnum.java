package com.se182393.shopgamemanagement.enums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum RoleEnum {
    ADMIN_ROLE(1, "Admin"),
    CUSTOMER_ROLE(2, "Customer");

    private int id;
    private String roleName;
}
