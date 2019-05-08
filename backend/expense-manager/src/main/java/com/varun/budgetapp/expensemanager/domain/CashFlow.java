package com.varun.budgetapp.expensemanager.domain;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Income
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "CASHFLOW")
public class CashFlow {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;    
    @JsonProperty("type")
    private CashFlowTypeEnum type;
    @Column(name = "sub_type")
    private String subType;
    @NotNull
    private BigDecimal amount;
    private String memo;
    @NotNull
    @Column(name = "entry_time")
    private LocalDateTime entryTime;


    public static enum CashFlowTypeEnum{
        INCOME("Income"),EXPENSE("Expense");

        private String value;

        CashFlowTypeEnum(String value) {
            this.value = value;
        }

        /**
         * @return the value
         */
        public String getValue() {
            return value;
        }

    }

}