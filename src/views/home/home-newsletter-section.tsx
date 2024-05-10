import Container from "@mui/material/Container";
import { NewsletterHeader, NewslatterPaper, NewsletterForm } from "~/components/newsletter";
import { PageSection, PageSectionProps } from "~/components/page-section";

//Interfaces
export interface HomeNewsletterSectionProps extends PageSectionProps {}

//Component
export const HomeNewsletterSection = (props: HomeNewsletterSectionProps) => {
  return (
    <PageSection disablePadding {...props}>
      <Container>
        <NewslatterPaper>
          <NewsletterHeader
            title="The Better Marketing Newsletter."
            subtitle={
              <>
                Thousands of busy marketers trust our
                <strong>Better Newsletter</strong> for tips on better marketing that you can use right now.
              </>
            }
          />
          <NewsletterForm />
        </NewslatterPaper>
      </Container>
    </PageSection>
  );
};
