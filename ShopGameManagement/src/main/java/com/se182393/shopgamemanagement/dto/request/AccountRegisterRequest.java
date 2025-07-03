package com.se182393.shopgamemanagement.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Valid
public class AccountRegisterRequest {
    @NotBlank(message = "Username cannot empty")
    @Length(min = 6, max = 12, message = "Username length invalid")
    private String username;

    @NotBlank(message = "Password cannot empty")
    @Length(min = 6, max = 12, message = "Password length invalid")
    private String password;

    private String confirmPassword;
}
