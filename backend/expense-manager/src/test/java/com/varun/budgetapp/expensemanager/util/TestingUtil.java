package com.varun.budgetapp.expensemanager.util;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.varun.budgetapp.expensemanager.domain.CashFlow;
import com.varun.budgetapp.expensemanager.domain.CashFlow.CashFlowTypeEnum;

/**
 * TestingUtil
 */
public class TestingUtil {

    private TestingUtil() throws Exception{
        throw new IllegalAccessException();
    }


    public static CashFlow createIncomeCashFlow() {
        return CashFlow
              .builder()
              .amount(BigDecimal.TEN)
              .entryTime(LocalDateTime.now())
              .type(CashFlowTypeEnum.INCOME)
              .subType("FOOD")
              .build();
    }


    public static CashFlow cashFlowByAmountAndType(BigDecimal amount, CashFlowTypeEnum type, String subType) {
        return CashFlow
              .builder()
              .amount(amount)
              .entryTime(LocalDateTime.now())
              .type(type)
              .subType(subType)
              .build();
    }


    public static String asJsonString(final Object obj) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
            objectMapper.registerModule(new JavaTimeModule());
            return objectMapper.writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    
}