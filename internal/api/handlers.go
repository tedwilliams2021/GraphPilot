package api

import (
	"github.com/gin-gonic/gin"
)

func generateMockData() map[string]interface{} {
	companies := []map[string]interface{}{
		{"uid": "0x1", "name": "TechCorp", "type": "Company", "industry": "Technology", "founded": "2010"},
		{"uid": "0x2", "name": "BioMed Inc", "type": "Company", "industry": "Healthcare", "founded": "2015"},
	}

	departments := []map[string]interface{}{
		{"uid": "0x3", "name": "Engineering", "type": "Department", "budget": "1M"},
		{"uid": "0x4", "name": "Research", "type": "Department", "budget": "2M"},
	}

	projects := []map[string]interface{}{
		{"uid": "0x5", "name": "Project Alpha", "type": "Project", "status": "Active", "priority": "High"},
		{"uid": "0x6", "name": "Project Beta", "type": "Project", "status": "Planning", "priority": "Medium"},
	}

	employees := []map[string]interface{}{
		{"uid": "0x7", "name": "John Doe", "type": "Employee", "role": "Developer", "skills": []string{"Go", "React"}},
		{"uid": "0x8", "name": "Jane Smith", "type": "Employee", "role": "Researcher", "skills": []string{"Python", "ML"}},
	}

	technologies := []map[string]interface{}{
		{"uid": "0x9", "name": "React", "type": "Technology", "category": "Frontend", "version": "18.2"},
		{"uid": "0x10", "name": "Go", "type": "Technology", "category": "Backend", "version": "1.19"},
	}

	edges := []map[string]interface{}{
		{"from": "0x1", "to": "0x3", "label": "has_department"},
		{"from": "0x3", "to": "0x5", "label": "manages"},
		{"from": "0x7", "to": "0x5", "label": "works_on"},
		{"from": "0x7", "to": "0x9", "label": "uses"},
	}

	return map[string]interface{}{
		"data": map[string]interface{}{
			"queryGraph": map[string]interface{}{
				"nodes": append(append(append(append(companies, departments...), projects...), employees...), technologies...),
				"edges": edges,
			},
		},
	}
}

func HandleQuery(c *gin.Context) {
	c.JSON(200, generateMockData())
}