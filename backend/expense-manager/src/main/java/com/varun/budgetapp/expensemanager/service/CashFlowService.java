package com.varun.budgetapp.expensemanager.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.varun.budgetapp.expensemanager.domain.CashFlow;
import com.varun.budgetapp.expensemanager.domain.CashFlow.CashFlowTypeEnum;
import com.varun.budgetapp.expensemanager.repository.CashFlowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

/**
 * IncomeService
 */
@Service
@Slf4j
public class CashFlowService {

	@Autowired
	private CashFlowRepository repository;

	public CashFlow addIncome(CashFlow income) {
		return repository.save(income);
	}

	public List<CashFlow> retrieveEntryByDate(LocalDate from, LocalDate to) {
		return repository.findAllByEntryTimeBetween(from.atTime(0, 0), to.plusDays(1).atTime(0, 0));
	}

	public BigDecimal getBalance(LocalDate from, LocalDate to) {
		log.info(":{}",this.retrieveEntryByDate(from, to));
		return this.retrieveEntryByDate(from, to)
			    .stream()
			    .map(cashflow -> {
			if (cashflow.getType().equals(CashFlowTypeEnum.INCOME)) {
				return cashflow.getAmount();
			} else {
				return cashflow.getAmount().negate();
			}
				})
				.reduce((x, y) -> x.add(y)).orElseGet(() -> BigDecimal.ZERO);

	}

}