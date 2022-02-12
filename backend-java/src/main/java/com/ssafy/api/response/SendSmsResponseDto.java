package com.ssafy.api.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED) public class SendSmsResponseDto {
    private String statusCode;
    private String statusName;
    private String requestId;
    private String requestTime; }

