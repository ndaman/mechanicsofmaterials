PANDOC := $(patsubst %.md,%.pandoc,$(wildcard *.md))
HANDOUTS := $(patsubst %.md,%.md.handout.pdf,$(wildcard *.md))

all : $(PANDOC) $(HANDOUTS)

%.pandoc : %.md
	sed 's/-\{3,4\}//g; s/\\\[/\[/g; s/\\\]/\]/g; s/\\\\/\\/g; s/## AE333//g; s/\\_/_/g; s/<br\/>/\n\n/g; s/`\(\$$\+\)/\1/g; s/\(\$$\+\)`/\1/g; /^# /d' $^ > $@


%.pdf : %.pandoc
	pandoc style.yaml -f markdown $^ -t beamer -o $@

%.tex : %.pandoc
	pandoc style.yaml -f markdown $^ -t beamer -s -o $@ 
		

clobber : 
	rm -f $(PANDOC)
	rm -f $(HANDOUTS)
