package com.varun.budgetapp.expensemanager.service;

import static com.varun.budgetapp.expensemanager.util.TestingUtil.cashFlowByAmountAndType;
import static com.varun.budgetapp.expensemanager.util.TestingUtil.createIncomeCashFlow;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.varun.budgetapp.expensemanager.domain.CashFlow;
import com.varun.budgetapp.expensemanager.repository.CashFlowRepository;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * IncomeServiceTest
 */

@RunWith(MockitoJUnitRunner.class)
public class CashFlowServiceTest {
    @InjectMocks
    private CashFlowService service;

    @Mock
    private CashFlowRepository repository;

    @Before
    public void setup() {
        service = new CashFlowService();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldAddIncome() {
        // Given
        CashFlow income = createIncomeCashFlow();
        Mockito.when(repository.save(Mockito.eq(income))).thenReturn(income);
        // When
        CashFlow expected = service.addIncome(income);
        // Then
        Assert.assertThat(income, Matchers.notNullValue());
        Assert.assertThat(expected, Matchers.is(income));
        Mockito.verify(repository, Mockito.times(1)).save(Mockito.eq(income));
    }
    
    @Test
    public void shouldCallFetchRepoMethod(){
        // Given
        Mockito.when(repository.findAllByEntryTimeBetween(Mockito.any(), Mockito.any())).thenReturn(new ArrayList<>());
        // When
        service.retrieveEntryByDate(LocalDate.now() , LocalDate.now());
        // Then 
        Mockito.verify(repository, Mockito.times(1)).findAllByEntryTimeBetween(Mockito.any(), Mockito.any());        
    }

    @Test
    public void shouldCalculateCorrectBalance(){
        // Given
        Mockito.when(repository.findAllByEntryTimeBetween(Mockito.any(), Mockito.any())).thenReturn(this.createListOfRecords());
        // When
        BigDecimal balance = service.getBalance(LocalDate.now(), LocalDate.now());
        // Then
        Assert.assertThat(balance, Matchers.notNullValue());
        Assert.assertThat(balance.longValue(), Matchers.is(10L));
        
    }

    private List<CashFlow> createListOfRecords() {
        List<CashFlow> list = new ArrayList<>();
        list.add(cashFlowByAmountAndType(new BigDecimal(20),"INCOME","SALARY"));
        list.add(cashFlowByAmountAndType(new BigDecimal(10),"EXPENSE","FOOD"));
        return list;
    }


}